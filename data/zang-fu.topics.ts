import type { TopicPageData } from '@/types/topics'

export const zangFuOrganyTopic: TopicPageData = {
  slug: 'zang-fu-organy',
  title: 'Zang Fu orgány',
  intro:
    'Zang Fu orgány jsou základní mapou funkčních vztahů v tradiční čínské medicíně.',
  description:
    'Téma propojuje orgány, jejich funkce, vazby, emoce, tekutiny, smysly i rytmus dne. Nejde jen o seznam orgánů, ale o systém vztahů, který dává tělu i symptomům logiku.',
  accent: 'warm',
  heroImage: '/fox/meditating.png',
  video: {
    title: 'Úvod do Zang Fu orgánů',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description:
      'Krátké orientační video k tomu, jak o orgánech přemýšlet systémově, ne anatomicky.',
  },
  actions: [
    {
      label: 'Začít procvičování',
      href: '/exercises?topic=zang-fu-organy',
      variant: 'primary',
    },
    {
      label: 'Otevřít PDF pracovní listy',
      href: '#topic-pdf-section',
      variant: 'secondary',
    },
  ],
  learningPoints: [
    'rozdíl mezi Zang a Fu orgány',
    'hlavní funkce jednotlivých orgánů',
    'vzájemné vztahy orgánů',
    'vazby na emoce, smysly a tkáně',
    'orientace v základních syndromových souvislostech',
  ],
  pdfs: [
    {
      label: 'Orgány a orgánové hodiny — pracovní list',
      href: '/pdf/zang-fu/organy-hodiny-01.pdf',
    },
    {
      label: 'Orgány a orgánové hodiny — řešení',
      href: '/pdf/zang-fu/organy-hodiny-01-answers.pdf',
    },
  ],
  subtopics: [
    {
      slug: 'zang-organy',
      title: 'Zang orgány',
      description:
        'Plné orgány, jejich základní funkce, substance a stabilizační role.',
      href: '/topics/zang-fu-organy/zang-organy',
    },
    {
      slug: 'fu-organy',
      title: 'Fu orgány',
      description:
        'Duté orgány, transformace a transport, pohyb a průchodnost.',
      href: '/topics/zang-fu-organy/fu-organy',
    },
    {
      slug: 'vztahy-mezi-organy',
      title: 'Vztahy mezi orgány',
      description:
        'Kdo koho podporuje, kdo koho brzdí a proč symptomy málokdy chodí samy.',
      href: '/topics/zang-fu-organy/vztahy-mezi-organy',
    },
    {
      slug: 'emoce-a-smysly',
      title: 'Emoce, smysly a tkáně',
      description:
        'Napojení orgánů na psychiku, smyslové otvory, tkáně a tělesné projevy.',
      href: '/topics/zang-fu-organy/emoce-a-smysly',
    },
  ],
}