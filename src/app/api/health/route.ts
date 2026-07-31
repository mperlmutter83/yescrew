import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    api_key_configured: Boolean(process.env.TELNYX_API_KEY),
    from_configured: Boolean(process.env.TELNYX_FROM_NUMBER),
    to_configured: Boolean(process.env.FORWARD_TO_NUMBER),
    timestamp: new Date().toISOString(),
  });
}
