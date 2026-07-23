"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about-us" },
  { label: "RISK FREE MARKETING®", href: "/risk-free-marketing" },
  { label: "BLOG", href: "/blog" },
  { label: "CONTACT US", href: "/contact-us" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-black sticky top-0 z-50 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/yes-crew-logo-scaled.png"
            alt="Yes Crew"
            width={180}
            height={81}
            className="h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white text-sm font-semibold tracking-wide hover:text-[#2ea3f2] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+14249990653"
            className="text-white text-sm font-semibold hover:text-[#2ea3f2] transition-colors"
          >
            (424) 999-0653
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="lg:hidden bg-black border-t border-neutral-900 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-white text-sm font-semibold tracking-wide hover:text-[#2ea3f2] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+14249990653"
            className="text-[#2ea3f2] text-sm font-semibold"
          >
            (424) 999-0653
          </a>
        </nav>
      )}
    </header>
  );
}
