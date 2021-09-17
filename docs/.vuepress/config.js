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
    sidebar: 'auto',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Store User Manual', link: '/admin-user-manual.html' },
      { text: 'Anne', link: 'https://admin.anne.biz/' },
    ],
    serviceWorker: {
      updatePopup: true,
    },
  },
};
