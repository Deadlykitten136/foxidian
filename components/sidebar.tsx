"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

const topics = [
  "Yin & Yang",
  "Pět hybatelů",
  "Zang Fu orgány",
  "Qi, Krev a tekutiny",
  "Meridiány",
  "Byliny",
]

const foxChallenges = [
  "Meridians & Foxes",
  "What in the fox?",
  "That is fox-ed up",
  "Foxidian Trials",
]

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const savedState = window.localStorage.getItem("foxidian-sidebar-collapsed")
    if (savedState === "true") {
      setIsCollapsed(true)
    }
    setMounted(true)
  }, [])

  const toggleSidebar = () => {
    const nextValue = !isCollapsed
    setIsCollapsed(nextValue)
    window.localStorage.setItem(
      "foxidian-sidebar-collapsed",
      String(nextValue)
    )
  }

  return (
    <aside
      className={`sticky top-24 h-fit rounded-[24px] border p-4 transition-all duration-300 ${
        isCollapsed ? "w-[88px]" : "w-full max-w-[280px]"
      }`}
      style={{
        background: "var(--surface)",
        borderColor: "var(--border)",
        boxShadow: "var(--shadow-soft)",
      }}
    >
      <div className="mb-4 flex items-center justify-between gap-2">
        {!isCollapsed && (
          <h2
            className="px-2 text-xs font-semibold uppercase tracking-[0.18em]"
            style={{ color: "var(--text-secondary)" }}
          >
            Navigation
          </h2>
        )}

        <button
          type="button"
          onClick={toggleSidebar}
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          className="flex h-10 w-10 items-center justify-center rounded-full border text-sm"
          style={{
            background: "var(--surface-elevated)",
            borderColor: "var(--border)",
            color: "var(--text-primary)",
            boxShadow: "var(--shadow-soft)",
          }}
        >
          {mounted ? (isCollapsed ? "→" : "←") : "←"}
        </button>
      </div>

      <div>
        {!isCollapsed && (
          <h3
            className="px-2 text-xs font-semibold uppercase tracking-[0.18em]"
            style={{ color: "var(--text-secondary)" }}
          >
            Topics
          </h3>
        )}

        <nav className="mt-3 flex flex-col gap-2">
          {topics.map((topic, index) => (
            <Link
              key={topic}
              href="#"
              aria-label={topic}
              title={topic}
              className={`rounded-2xl border text-sm transition-transform duration-200 hover:-translate-y-[1px] ${
                isCollapsed ? "px-0 py-3 text-center" : "px-4 py-3"
              }`}
              style={{
                background: "var(--surface-elevated)",
                borderColor: "var(--border)",
                color: "var(--text-primary)",
                boxShadow: "var(--shadow-soft)",
              }}
            >
              {isCollapsed ? index + 1 : topic}
            </Link>
          ))}
        </nav>
      </div>

      <div className="mt-6">
        {!isCollapsed && (
          <h3
            className="px-2 text-xs font-semibold uppercase tracking-[0.18em]"
            style={{ color: "var(--text-secondary)" }}
          >
            Fox Challenges
          </h3>
        )}

        <nav className="mt-3 flex flex-col gap-2">
          {foxChallenges.map((challenge, index) => (
            <Link
              key={challenge}
              href="#"
              aria-label={challenge}
              title={challenge}
              className={`rounded-2xl border text-sm transition-transform duration-200 hover:-translate-y-[1px] ${
                isCollapsed ? "px-0 py-3 text-center" : "px-4 py-3"
              }`}
              style={{
                background: "var(--surface-elevated)",
                borderColor: "var(--border)",
                color: "var(--text-primary)",
                boxShadow: "var(--shadow-soft)",
              }}
            >
              {isCollapsed ? `F${index + 1}` : challenge}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  )
}