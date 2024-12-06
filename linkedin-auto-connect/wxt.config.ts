import { defineConfig } from 'wxt'

export default defineConfig({
  manifest: {
    name: 'LinkedIn Auto Connect',
    description: 'Automate LinkedIn connection requests',
    version: '1.0.0',
    permissions: ['activeTab'],
  },
  srcDir: 'src'
})
