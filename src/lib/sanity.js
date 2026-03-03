import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'j87wu5cb',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
})