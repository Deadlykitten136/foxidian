import type { TopicPageData } from '@/types/topics'

export const zangFuOrganyTopic: TopicPageData = {
  slug: 'zang-fu-organy',
  title: 'Zang Fu orgány',
  intro:
    'Zang Fu orgány jsou základní mapou funkčních vztahů v tradiční čínské medicíně.',
  description:
    'Téma propojuje orgány, jejich funkce, vazby, emoce, tekutiny, smysly i rytmus dne.',
  accent: 'warm',
  heroImage: '/fox/zangfufox.png',
  video: {
    title: 'Úvod do Zang Fu orgánů',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description:
      'Krátké orientační video k tomu, jak o orgánech přemýšlet systémově.',
  },
  actions: [
    {
      label: 'Začít procvičování',
      href: '/exercises?topic=zang-fu-organy',
      variant: 'primary',
    },
  ],
  learningPoints: [
    'rozdíl mezi Zang a Fu orgány',
    'hlavní funkce jednotlivých orgánů',
  ],
  pdfs: [],
  subtopics: [],
}