import {defineType, defineArrayMember} from 'sanity'

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [

    /* ================= TEXT BLOCK ================= */
    defineArrayMember({
      title: 'Block',
      type: 'block',

      /* ========= SEO HEADING CONTROL ========= */
      styles: [
        {title: 'Normal', value: 'normal'},

        // IMPORTANT: DO NOT use multiple H1 inside articles.
        // H1 should usually be blog title only.
        {title: 'H2 (Main Section)', value: 'h2'},
        {title: 'H3 (Sub Section)', value: 'h3'},
        {title: 'H4 (Minor Section)', value: 'h4'},

        {title: 'Quote', value: 'blockquote'},
      ],

      /* ========= LIST SUPPORT ========= */
      lists: [
        {title: 'Bullet List', value: 'bullet'},
        {title: 'Numbered List', value: 'number'}
      ],

      /* ========= INLINE FORMATTING ========= */
      marks: {
        decorators: [
          {title: 'Strong (Bold)', value: 'strong'},
          {title: 'Emphasis (Italic)', value: 'em'},
          {title: 'Code', value: 'code'},
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
              {
                title: 'Open in new tab',
                name: 'blank',
                type: 'boolean',
              }
            ],
          },
        ],
      },
    }),

    /* ================= IMAGE ================= */
    defineArrayMember({
      type: 'image',
      options: {hotspot: true},
    }),

    /* ================= TABLE SUPPORT ================= */
    defineArrayMember({
      type: 'table'
    }),
  ],
})