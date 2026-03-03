import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'yourProjectId',
    dataset: 'production'
  },

  deployment: {
    appId: 'wxdggum077zd44vkdc7kln58'
  }
})
