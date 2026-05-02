/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://subhadeepdas.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/server-sitemap.xml'], // exclude server-side sitemap if any
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}
