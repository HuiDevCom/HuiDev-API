import { defineConfig } from 'vitepress'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

// https://vitepress.dev/reference/site-config
export default defineConfig({
  cleanUrls: true,
  lang: 'zh-CN',
  title: "风绘 API",
  description: "A VitePress Site",
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  sitemap: {
    hostname: 'https://docs.api.huidev.com'
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/favicon.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/markdown-examples' },
      { text: '主站', link: 'https://api.huidev.com' },
     // { text: `VitePress ${pkg.version}`, link: 'https://vitepress.dev/zh/' }
    ],

    sidebar: [
      {
        text: '文档',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/HuiDevCom/HuiDev-API' }
    ]
  }
})
