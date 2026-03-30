import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {table} from '@sanity/table'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'knytxstudio-blog',

  projectId: 'j87wu5cb',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    table(), 
  ],

  schema: {
    types: schemaTypes,
  },
})