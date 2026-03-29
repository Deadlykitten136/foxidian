"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

const topics = [
  { label: "Yin & Yang", href: "/topics/yin-yang", short: "YY" },
  { label: "Pět hybatelů", href: "/topics/pet-hybatelu", short: "5H" },
  { label: "Zang Fu orgány", href: "/topics/zang-fu-organy", short: "ZF" },
  {
    label: "Qi, Krev a tekutiny",
    href: "/topics/qi-krev-a-tekutiny",
    short: "QKT",
  },
  { label: "Meridiány", href: "/topics/meridiany", short: "ME" },
  { label: "Byliny", href: "/topics/byliny", short: "BY" },
]

const challenges = [
  {
    label: "Meridians & Foxes",
    href: "/challenges/meridians-and-foxes",
    short: "M&F",
  },
  {
    label: "What in the fox?",
    href: "/challenges/what-in-the-fox",
    short: "WTF",
  },
  {
    label: "That is fox-ed up",
    href: "/challenges/that-is-foxed-up",
    short: "TFU",
  },
  {
    label: "Foxidian Trials",
    href: "/challenges/foxidian-trials",
    short: "FT",
  },
]

export function Sidebar() {
  const pathname = usePathname()

  const [isCollapsed, setIsCollapsed] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const saved = window.localStorage.getItem("foxidian-sidebar")
    if (saved === "collapsed") setIsCollapsed(true)
    setMounted(true)
  }, [])

  const toggleSidebar = () => {
    const next = !isCollapsed
    setIsCollapsed(next)
    window.localStorage.setItem(
      "foxidian-sidebar",
      next ? "collapsed" : "open"
    )
  }

  return (
    <aside
      className={`sticky top-24 h-fit rounded-[24px] border p-4 transition-all duration-300 ${
        isCollapsed ? "w-[88px]" : "w-[280px]"
      }`}
      style={{
        background: "var(--surface)",
        borderColor: "var(--border)",
        boxShadow: "var(--shadow-soft)",
      }}
    >
      {/* HEADER */}
      <div className="mb-4 flex items-center justify-between">
        {!isCollapsed && (
          <p
            className="text-xs font-semibold uppercase tracking-[0.18em]"
            style={{ color: "var(--text-secondary)" }}
          >
            Navigace
          </p>
        )}

        <button
          onClick={toggleSidebar}
          className="flex h-10 w-10 items-center justify-center rounded-full border text-sm transition hover:-translate-y-[1px]"
          style={{
            background: "var(--surface-elevated)",
            borderColor: "var(--border)",
            boxShadow: "var(--shadow-soft)",
          }}
        >
          {mounted ? (isCollapsed ? "→" : "←") : "←"}
        </button>
      </div>

      {/* TOPICS */}
      <div>
        {!isCollapsed && (
          <p
            className="px-2 text-xs font-semibold uppercase tracking-[0.18em]"
            style={{ color: "var(--text-secondary)" }}
          >
            Témata
          </p>
        )}

        <nav className="mt-3 flex flex-col gap-2">
          {topics.map((item) => {
            const active = pathname === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                title={item.label}
                className={`rounded-2xl border text-sm transition-all duration-200 hover:-translate-y-[1px] ${
                  isCollapsed ? "py-3 text-center" : "px-4 py-3"
                }`}
                style={{
                  background: active
                    ? "var(--accent-warm)"
                    : "var(--surface-elevated)",
                  borderColor: active
                    ? "var(--brand-primary)"
                    : "var(--border)",
                  boxShadow: "var(--shadow-soft)",
                }}
              >
                {isCollapsed ? item.short : item.label}
              </Link>
            )
          })}
        </nav>
      </div>

      {/* CHALLENGES */}
      <div className="mt-6">
        {!isCollapsed && (
          <p
            className="px-2 text-xs font-semibold uppercase tracking-[0.18em]"
            style={{ color: "var(--text-secondary)" }}
          >
            Fox Challenges
          </p>
        )}

        <nav className="mt-3 flex flex-col gap-2">
          {challenges.map((item) => {
            const active = pathname === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                title={item.label}
                className={`rounded-2xl border text-sm transition-all duration-200 hover:-translate-y-[1px] ${
                  isCollapsed ? "py-3 text-center" : "px-4 py-3"
                }`}
                style={{
                  background: active
                    ? "var(--accent-warm)"
                    : "var(--surface-elevated)",
                  borderColor: active
                    ? "var(--brand-primary)"
                    : "var(--border)",
                  boxShadow: "var(--shadow-soft)",
                }}
              >
                {isCollapsed ? item.short : item.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}