import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const TELNYX_API_BASE = 'https://api.telnyx.com/v2';

function log(...args: unknown[]) {
  console.log('[telnyx-forwarder]', ...args);
}

function isOptOut(text: string) {
  const t = text.trim().toUpperCase();
  return ['STOP', 'STOPALL', 'UNSUBSCRIBE', 'CANCEL', 'END', 'QUIT'].includes(t);
}

function isHelp(text: string) {
  const t = text.trim().toUpperCase();
  return ['HELP', 'INFO'].includes(t);
}

async function forwardViaTelnyx({
  apiKey,
  from,
  to,
  text,
}: {
  apiKey: string;
  from: string;
  to: string;
  text: string;
}) {
  const resp = await fetch(`${TELNYX_API_BASE}/messages`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ from, to, text }),
  });
  const body = await resp.text();
  return { status: resp.status, body };
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.TELNYX_API_KEY;
  const fromNumber = process.env.TELNYX_FROM_NUMBER;
  const toNumber = process.env.FORWARD_TO_NUMBER;

  if (!apiKey || !fromNumber || !toNumber) {
    log('ERROR: missing env vars', {
      apiKey: Boolean(apiKey),
      fromNumber: Boolean(fromNumber),
      toNumber: Boolean(toNumber),
    });
    // Always 200 so Telnyx does not retry a configuration issue.
    return NextResponse.json({ status: 'misconfigured' });
  }

  let body: any;
  try {
    const raw = await request.text();
    body = JSON.parse(raw || '{}');
  } catch (e) {
    log('invalid JSON:', e instanceof Error ? e.message : e);
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 });
  }

  const data = body.data || {};
  const eventType = data.event_type;
  const payload = data.payload || {};

  log('event_type=', eventType, 'id=', data.id);

  if (eventType !== 'message.received') {
    return NextResponse.json({ status: 'ignored', reason: eventType || 'unknown' });
  }

  const fromInbound = payload.from?.phone_number || '?';
  const text = payload.text || '';
  const toList = Array.isArray(payload.to)
    ? payload.to.map((t: any) => t.phone_number).join(',')
    : '';
  const media = payload.media || [];

  const tags: string[] = [];
  if (isOptOut(text)) tags.push('OPTOUT');
  if (isHelp(text)) tags.push('HELP');
  if (media.length > 0) tags.push(`MEDIA(${media.length})`);

  const tagStr = tags.length ? ` ${tags.join(' ')}` : '';
  const forwardText = `[${fromInbound} → ${toList}]${tagStr} ${text}`.trim();

  log(`forwarding: ${forwardText}`);

  try {
    const { status, body: respBody } = await forwardViaTelnyx({
      apiKey,
      from: fromNumber,
      to: toNumber,
      text: forwardText,
    });
    log(`telnyx response: ${status} ${respBody.slice(0, 200)}`);
    return NextResponse.json({ status: 'forwarded', telnyx_status: status });
  } catch (e) {
    log('forward failed:', e instanceof Error ? e.message : e);
    return NextResponse.json({ status: 'forward_failed' });
  }
}

export async function GET() {
  return NextResponse.json({ error: 'method_not_allowed' }, { status: 405 });
}
