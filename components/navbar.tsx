"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { foxLines } from "@/lib/design-tokens"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  const [foxLine, setFoxLine] = useState(
    "..."
  )

  useEffect(() => {
    const randomLine = foxLines[Math.floor(Math.random() * foxLines.length)]
    setFoxLine(randomLine)
  }, [])

  return (
    <header
      className="sticky top-0 z-50 border-b backdrop-blur"
      style={{
        background: "color-mix(in srgb, var(--background) 88%, transparent)",
        borderColor: "var(--border)",
      }}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 md:px-6">
        
        {/* LEFT - LOGO */}
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-3 rounded-2xl border px-3 py-2"
          style={{
            background: "var(--surface)",
            borderColor: "var(--border)",
            boxShadow: "var(--shadow-soft)",
          }}
        >
          <Image
            src="/fox/logo1.png"
            alt="Foxidian fox logo"
            width={46}
            height={46}
            className="h-[46px] w-[46px] object-contain transition-transform duration-200 group-hover:scale-[1.03]"
          />

          <div
            className="text-[18px] font-light uppercase tracking-[0.22em]"
            style={{ color: "var(--text-primary)" }}
          >
            Foxidian
          </div>
        </Link>

        {/* CENTER - FOX LINE */}
        <div className="hidden flex-1 justify-center md:flex">
          <div
            className="rounded-full border px-5 py-2 text-sm italic"
            style={{
              background: "var(--surface)",
              borderColor: "var(--border)",
              color: "var(--text-secondary)",
              boxShadow: "var(--shadow-soft)",
            }}
          >
            {foxLine}
          </div>
        </div>

        {/* RIGHT - ACTIONS */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          <Link
            href="/profile"
            className="flex h-11 min-w-11 items-center justify-center rounded-full border px-4 text-sm font-medium"
            style={{
              background: "var(--surface)",
              borderColor: "var(--border)",
              color: "var(--text-primary)",
              boxShadow: "var(--shadow-soft)",
            }}
          >
            Profile
          </Link>
        </div>
      </div>

      {/* MOBILE FOX LINE */}
      <div className="px-4 pb-3 md:hidden">
        <div
          className="rounded-full border px-4 py-2 text-sm italic"
          style={{
            background: "var(--surface)",
            borderColor: "var(--border)",
            color: "var(--text-secondary)",
            boxShadow: "var(--shadow-soft)",
          }}
        >
          {foxLine}
        </div>
      </div>
    </header>
  )
}