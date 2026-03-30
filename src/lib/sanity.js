import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'j87wu5cb',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

/* ================= IMAGE URL BUILDER ================= */

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}