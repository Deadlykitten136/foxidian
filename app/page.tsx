import { Sidebar } from "@/components/sidebar"

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 md:px-6">
      <div className="grid gap-6 md:grid-cols-[auto_minmax(0,1fr)]">
        <Sidebar />

        <section
          className="rounded-[24px] border p-8"
          style={{
            background: "var(--surface)",
            borderColor: "var(--border)",
            boxShadow: "var(--shadow-soft)",
          }}
        >
          <h1
            className="text-3xl font-semibold md:text-5xl"
            style={{ color: "var(--text-primary)" }}
          >
            Welcome to Foxidian
          </h1>

          <p
            className="mt-3 max-w-2xl text-base md:text-lg"
            style={{ color: "var(--text-secondary)" }}
          >
            A calm, clever, and slightly foxed way to study Traditional Chinese
            Medicine.
          </p>
        </section>
      </div>
    </main>
  )
}