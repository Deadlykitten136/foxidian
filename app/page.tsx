import Image from "next/image"
import { Sidebar } from "@/components/sidebar"
import { texts } from "@/lib/texts"

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 md:px-6">
      <div className="grid gap-6 sm:grid-cols-[auto_minmax(0,1fr)]">
        <Sidebar />

        <section className="space-y-6">
          <div
            className="flex items-center gap-6 rounded-[24px] border p-6"
            style={{
              background: "var(--surface)",
              borderColor: "var(--border)",
              boxShadow: "var(--shadow-soft)",
            }}
          >
            <Image
              src="/fox/meditating.png"
              alt="Foxidian fox"
              width={120}
              height={120}
            />

            <div>
              <h1
                className="text-3xl font-semibold md:text-4xl"
                style={{ color: "var(--text-primary)" }}
              >
                {texts.heroTitle}
              </h1>

              <p
                className="mt-2 max-w-xl text-base md:text-lg"
                style={{ color: "var(--text-secondary)" }}
              >
                {texts.heroSubtitle}
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              { label: texts.continue },
              { label: texts.random },
              { label: texts.plan },
              { label: texts.daily },
            ].map((item, i) => (
              <div
                key={i}
                className="cursor-pointer rounded-[20px] border p-6 transition-all duration-200 hover:-translate-y-1"
                style={{
                  background: "var(--surface)",
                  borderColor: "var(--border)",
                  boxShadow: "var(--shadow-soft)",
                }}
              >
                <h2
                  className="text-xl font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  {item.label}
                </h2>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}