"use client"

import { useEffect, useState } from "react"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("foxidian-theme")
    const shouldUseDark = savedTheme === "dark"

    document.documentElement.classList.toggle("dark", shouldUseDark)
    setIsDark(shouldUseDark)
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    const nextIsDark = !isDark

    setIsDark(nextIsDark)
    document.documentElement.classList.toggle("dark", nextIsDark)
    window.localStorage.setItem("foxidian-theme", nextIsDark ? "dark" : "light")
  }

  if (!mounted) {
    return (
      <button
        aria-label="Theme toggle loading"
        className="flex h-11 w-20 items-center rounded-full border px-1 opacity-70"
        style={{
          background: "var(--surface-elevated)",
          borderColor: "var(--border)",
          boxShadow: "var(--shadow-soft)",
        }}
      >
        <span
          className="flex h-9 w-9 items-center justify-center rounded-full"
          style={{ background: "var(--background)" }}
        >
          💡
        </span>
      </button>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative flex h-11 w-20 items-center rounded-full border px-1"
      style={{
        background: "var(--surface-elevated)",
        borderColor: "var(--border)",
        boxShadow: "var(--shadow-soft)",
      }}
    >
      <span
        className={`absolute flex h-9 w-9 items-center justify-center rounded-full text-base transition-transform duration-300 ${
          isDark ? "translate-x-0" : "translate-x-9"
        }`}
        style={{
          background: "var(--background)",
          boxShadow: "var(--shadow-soft)",
        }}
      >
        💡
      </span>
    </button>
  )
}