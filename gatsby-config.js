module.exports = {
  siteMetadata: {
    title: `Email Timeline`,
    description: `Email History and Timeline`,
    author: `@prasanthmj`,
  },
  plugins: [
  `gatsby-plugin-sass`,
  `gatsby-plugin-react-helmet`,
  `gatsby-transformer-hjson`,
   {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    }
  ],
}