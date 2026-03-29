import Link from "next/link"

const topics = [
  "Yin & Yang",
  "Pět hybatelů",
  "Zang Fu orgány",
  "Qi, Krev a tekutiny",
  "Meridiány",
  "Byliny",
]

const foxChallenges = [
  "Dungeons",
  "Liščí případovky",
  "Mini stories",
]

export function Sidebar() {
  return (
    <aside
      className="sticky top-24 h-fit w-full rounded-[24px] border p-4"
      style={{
        background: "var(--surface)",
        borderColor: "var(--border)",
        boxShadow: "var(--shadow-soft)",
      }}
    >
      <div>
        <h2
          className="px-2 text-xs font-semibold uppercase tracking-[0.18em]"
          style={{ color: "var(--text-secondary)" }}
        >
          Topics
        </h2>

        <nav className="mt-3 flex flex-col gap-2">
          {topics.map((topic) => (
            <Link
              key={topic}
              href="#"
              className="rounded-2xl border px-4 py-3 text-sm"
              style={{
                background: "var(--surface-elevated)",
                borderColor: "var(--border)",
                color: "var(--text-primary)",
                boxShadow: "var(--shadow-soft)",
              }}
            >
              {topic}
            </Link>
          ))}
        </nav>
      </div>

      <div className="mt-6">
        <h2
          className="px-2 text-xs font-semibold uppercase tracking-[0.18em]"
          style={{ color: "var(--text-secondary)" }}
        >
          Liščí výzvy
        </h2>

        <nav className="mt-3 flex flex-col gap-2">
          {foxChallenges.map((challenge) => (
            <Link
              key={challenge}
              href="#"
              className="rounded-2xl border px-4 py-3 text-sm"
              style={{
                background: "var(--surface-elevated)",
                borderColor: "var(--border)",
                color: "var(--text-primary)",
                boxShadow: "var(--shadow-soft)",
              }}
            >
              {challenge}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  )
}