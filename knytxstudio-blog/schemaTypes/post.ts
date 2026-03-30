import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',

  fields: [
    // TITLE
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required().min(5).max(120),
    }),

    // SLUG
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),

    // EXCERPT (Used in Blog Grid)
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'Short preview text shown in blog listing',
      validation: Rule => Rule.max(300),
    }),

    // DESCRIPTION (Used for SEO Meta)
    defineField({
      name: 'description',
      title: 'SEO Description',
      type: 'text',
      rows: 3,
      description: 'Meta description for search engines (150–160 characters recommended)',
      validation: Rule => Rule.max(160),
    }),

    // AUTHOR
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
    }),

    // MAIN IMAGE
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    // CATEGORIES
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    }),

    // FEATURED TOGGLE
    defineField({
      name: 'featured',
      title: 'Featured Post',
      type: 'boolean',
      description: 'Enable to highlight this post on blog homepage',
      initialValue: false,
    }),

    // PUBLISH DATE
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      validation: Rule => Rule.required(),
    }),

    // BODY CONTENT
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
      featured: 'featured',
    },
    prepare(selection) {
      const { author, featured } = selection
      return {
        ...selection,
        subtitle: `${author ? `by ${author}` : ''}${featured ? ' • Featured' : ''}`,
      }
    },
  },
})