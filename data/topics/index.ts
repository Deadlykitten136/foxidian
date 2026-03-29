import type { TopicPageData } from '@/types/topics'
import { zangFuOrganyTopic } from './zang-fu-organy'

const topics: Record<string, TopicPageData> = {
  'zang-fu-organy': zangFuOrganyTopic,
}

export function getTopicBySlug(slug: string): TopicPageData | null {
  return topics[slug] ?? null
}

export function getAllTopics(): TopicPageData[] {
  return Object.values(topics)
}