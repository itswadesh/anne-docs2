module.exports = {
  title: 'Anne Docs',
  description: 'Install and start Anne with these simple steps',
  head: [
    ['link', { rel: 'icon', href: '/assets/img/logo.png' }],
    [
      'link',
      {
        rel: 'shortcut icon',
        type: 'image/png',
        href: '/assets/img/favicon.png',
      },
    ],
  ],
  serviceWorker: true,
  themeConfig: {
    // algolia: {
    //   apiKey: '3a539aab83105f01761a137c61004d85',
    //   indexName: 'vuepress',
    // },
    sidebar: 'auto',
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Installation', link: '/installation-instructions.html' },
      { text: 'Store User Manual', link: '/admin-user-manual.html' },
      // { text: 'Guide', link: '/guide.html' },
      // { text: 'Settings', link: '/settings.html' },
      // { text: 'Directory Structure', link: '/directory-structure.html' },
      // { text: 'Features', link: '/features.html' },
      // { text: 'API', link: '/api.html' },
      // { text: 'Manual', link: '/manual.html' },
      // { text: 'History', link: '/history.html' },
      { text: 'Anne', link: 'https://admin.anne.biz/' },
    ],
    serviceWorker: {
      updatePopup: true,
    },
  },
};
