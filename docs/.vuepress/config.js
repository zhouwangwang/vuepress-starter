const secret = require('./config/secret')

module.exports = {
  title: '网站的title',
  description: '网站的description',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'author', content: 'beyondcoder'}],
    ['meta', { name: 'keywords', content: 'vuepress介绍, vuepress说明' }],
    
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-icon-152x152-seochecker-manifest-420.jpg' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/apple-icon-144x144-seochecker-manifest-420.jpg' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  plugins: {
    '@vuepress/pwa': {
      serviceWorker: false,
      updatePopup:  false,
      popupComponent: 'SWUpdatePopup'
    }, 
    '@vssue/vuepress-plugin-vssue': {
      platform: 'github-v4',
      owner: 'zhouwangwang',
      repo: 'zhouwangwang.github.io',
      clientId: secret.clientId,
      clientSecret: secret.clientSecret,
      autoCreateIssue: true
    },
    '@vuepress/back-to-top': true,
    '@vuepress/plugin-google-analytics': {
      'id': secret.ga
    }
} ,
  themeConfig: {
    logo: '/assets/img/logo.png',
    lastUpdated: '上次更新',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      }
    ],
    // sidebar: 'auto'
    sidebar: [
      '',
      'about'
    ]
  }
}