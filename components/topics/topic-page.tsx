import Image from 'next/image'
import Link from 'next/link'
import type { TopicPageData } from '@/types/topics'

type TopicPageProps = {
  topic: TopicPageData
}

export function TopicPage({ topic }: TopicPageProps) {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-6 md:px-6">
      <section className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm">
        <div className="grid gap-6 md:grid-cols-[1.4fr_0.8fr] md:items-center">
          <div className="space-y-4">
            <div className="inline-flex rounded-full border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-3 py-1 text-sm text-[var(--color-text-secondary)]">
              Téma Foxidian
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl font-semibold tracking-tight text-[var(--color-text-primary)] md:text-4xl">
                {topic.title}
              </h1>
              <p className="text-base text-[var(--color-text-secondary)]">
                {topic.intro}
              </p>
              <p className="max-w-3xl text-sm leading-7 text-[var(--color-text-secondary)] md:text-base">
                {topic.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {topic.actions.map((action) => (
                <Link
                  key={action.href}
                  href={action.href}
                  className={[
                    'rounded-2xl border px-4 py-2.5 text-sm font-medium shadow-sm transition-transform duration-150 hover:-translate-y-0.5',
                    action.variant === 'primary'
                      ? 'border-[var(--color-brand-primary)] bg-[var(--color-brand-primary)] text-white'
                      : 'border-[var(--color-border)] bg-[var(--color-surface-elevated)] text-[var(--color-text-primary)]',
                  ].join(' ')}
                >
                  {action.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            {topic.heroImage ? (
              <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-4 shadow-sm">
                <Image
                  src={topic.heroImage}
                  alt={topic.title}
                  width={240}
                  height={240}
                  className="h-auto w-[180px] object-contain md:w-[220px]"
                />
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">
            Co si v tomhle tématu srovnáš
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {topic.learningPoints.map((point) => (
              <div
                key={point}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-4 py-3 text-sm text-[var(--color-text-secondary)]"
              >
                {point}
              </div>
            ))}
          </div>
        </div>

        {topic.video ? (
          <section className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">
              Video
            </h2>

            <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-black shadow-sm">
              <div className="aspect-video">
                <iframe
                  className="h-full w-full"
                  src={topic.video.embedUrl}
                  title={topic.video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {topic.video.description ? (
              <p className="mt-4 text-sm leading-6 text-[var(--color-text-secondary)]">
                {topic.video.description}
              </p>
            ) : null}
          </section>
        ) : null}
      </section>

      <section
        id="topic-pdf-section"
        className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm"
      >
        <div className="mb-4 space-y-2">
          <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">
            PDF a workbook vrstva
          </h2>
          <p className="text-sm leading-6 text-[var(--color-text-secondary)]">
            Pracovní listy jsou samostatné assety navázané na cvičení a téma.
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {topic.pdfs.map((pdf) => (
            <Link
              key={pdf.href}
              href={pdf.href}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-4 py-4 text-sm font-medium text-[var(--color-text-primary)] shadow-sm transition-transform duration-150 hover:-translate-y-0.5"
            >
              {pdf.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm">
        <div className="mb-4 space-y-2">
          <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">
            Podtémata
          </h2>
          <p className="text-sm leading-6 text-[var(--color-text-secondary)]">
            Téma je rozdělené do menších logických bloků, aby šlo učivo procvičovat po malých krocích.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {topic.subtopics.map((subtopic) => (
            <Link
              key={subtopic.slug}
              href={subtopic.href}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-4 shadow-sm transition-transform duration-150 hover:-translate-y-0.5"
            >
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-[var(--color-text-primary)]">
                  {subtopic.title}
                </h3>
                <p className="text-sm leading-6 text-[var(--color-text-secondary)]">
                  {subtopic.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}