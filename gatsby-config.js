module.exports = {
  siteMetadata: {
    siteUrl: `https://victoriapugh.net`,
    title: `VPDesigns`,
    twitterUsername: '@vpdstudios',
    description: `Studio invested in bring all business owners into the digital age. We give you the site and tools you need to grow in the digital space.`,
    author: `@gatsbyjs`,
    menuLinks: [
      {
        label: 'Work',
        link: '/work',
      },
      {
        label: 'About',
        link: '/about',
      },
      {
        label: 'Contact',
        link: '/contact',
      },
      {
        label: 'Writing',
        link: '/blog',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-json`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Noto Serif', 'Noto Sans'],
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
