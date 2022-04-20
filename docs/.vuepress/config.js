module.exports = {
  base: '/vuepress-starter/',
  title: '网站的title',
  description: '网站的description',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'author', content: 'beyondcoder'}],
    ['meta', { name: 'keywords', content: 'vuepress介绍, vuepress说明' }]
  ],
  locales: {
      '/' : {
          lang : 'zh-CN'
      }
  },
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