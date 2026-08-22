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
  lastUpdated: true, // 首次配置不会立即生效，需 git 提交后爬取时间戳
  markdown: {
    image: {
      lazyLoading: true // 开启图片懒加载
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/favicon.png',
    darkModeSwitchLabel: '深浅模式',
    sidebarMenuLabel: '目录',
    returnToTopLabel: '返回顶部',
    outline: {
      level: [2, 4], // 显示2-4级标题
      label: '当前页大纲' // 文字显示
    },
    editLink: {
      pattern: 'https://github.com/HuiDevCom/HuiDev-API/edit/main/docs/:path',
      text: '在GitHub编辑本页'
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short', // 可选值 full、long、medium、short
        timeStyle: 'medium' // 可选值 full、long、medium、short
      }
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    // 本地搜索
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },
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
