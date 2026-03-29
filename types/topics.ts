export type TopicAction = {
  label: string
  href: string
  variant?: 'primary' | 'secondary'
}

export type TopicVideo = {
  title: string
  embedUrl: string
  description?: string
}

export type TopicPdfItem = {
  label: string
  href: string
}

export type TopicSubtopic = {
  slug: string
  title: string
  description: string
  href: string
}

export type TopicPageData = {
  slug: string
  title: string
  intro: string
  description: string
  accent: string
  heroImage?: string
  video?: TopicVideo
  actions: TopicAction[]
  learningPoints: string[]
  pdfs: TopicPdfItem[]
  subtopics: TopicSubtopic[]
}