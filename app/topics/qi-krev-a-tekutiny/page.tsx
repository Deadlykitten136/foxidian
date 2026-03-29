export default async function TopicPlaceholderPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 md:px-6">
      <section
        className="rounded-[24px] border p-8"
        style={{
          background: "var(--surface)",
          borderColor: "var(--border)",
          boxShadow: "var(--shadow-soft)",
        }}
      >
        <p
          className="text-xs font-semibold uppercase tracking-[0.2em]"
          style={{ color: "var(--text-secondary)" }}
        >
          Téma
        </p>

        <h1
          className="mt-2 text-3xl font-semibold md:text-5xl"
          style={{ color: "var(--text-primary)" }}
        >
          {slug}
        </h1>

        <p
          className="mt-3 max-w-2xl text-base md:text-lg"
          style={{ color: "var(--text-secondary)" }}
        >
          Tahle stránka zatím čeká na svůj Foxidian makeover.
        </p>
      </section>
    </main>
  )
}