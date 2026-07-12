import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  base: '/',
  bundler: viteBundler(),
  title: 'NATNPS 云穿透使用教程',
  description: 'natnps.com NPS云穿透使用教程，帮助手册',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  theme: defaultTheme({
    colorMode: 'auto',
    colorModeSwitch: true,
    navbar: [
      { text: 'NATNPS官网', link: 'https://natnps.com' },
    ],
    sidebar: [
      {
        text: '客户端使用指南 💻',
        collapsible: true,
        children: [
          '/client/windows',
          '/client/linux',
          '/client/docker',
          '/client/feiniu',
          '/client/synology',
          '/client/batch',
        ],
      },
      {
        text: '隧道协议 🌐',
        children: [
          '/tunnel/http',
          '/tunnel/tcp',
          '/tunnel/udp',
        ],
      },
      {
        text: '示例 🚀',
        children: [
          '/example/domain',
          '/example/https',
          '/example/ssh',
          '/example/rdp',
          '/example/mysql',
          '/example/tls',
        ],
      },
      '/faq',
    ],
    themePlugins: {
      mediumZoom: true,
    },
  }),
})
