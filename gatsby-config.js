const autoprefixer = require('autoprefixer')
const rucksackCSS = require('rucksack-css')

module.exports = {
  siteMetadata: {
    title: `Ben Crawford`,
    description: `The portfolio of Ben Crawford.`,
    siteUrl: `http://bencrawford.media`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-react-next`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-twitter`,
    {
      resolve: `gatsby-plugin-feed`
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/content/`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          'gatsby-remark-copy-linked-files',
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1080
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (eg <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (eg for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: 'language-',
              // This is used to allow setting a language for inline code
              // (i.e. single backticks) by creating a separator.
              // This separator is a string and will do no white-space
              // stripping.
              // A suggested value for English speakers is the non-ascii
              // character '›'.
              inlineCodeMarker: null,
              // This lets you set up language aliases.  For example,
              // setting this to '{ sh: "bash" }' will let you use
              // the language "sh" which will highlight using the
              // bash highlighter.
              aliases: {}
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Ben Crawford',
        short_name: 'Ben Crawford',
        start_url: '/',
        background_color: '#F5F5F5',
        theme_color: '#005CDD',
        display: 'minimal-ui',
        icons: 'src/assets/favicon/apple-touch-icon.png'
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        // output: `/some-other-sitemap.xml`,
        // exclude: [`/path/to/page`, `/another/page`],
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }

          allSitePage {
            edges {
              node {
                path
              }
            }
          }
      }`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: '', // TODO (add GA)
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true
      }
    },
    {
      resolve: 'gatsby-plugin-postcss-sass',
      options: {
        postCssPlugins: [autoprefixer(), rucksackCSS()],
        precision: 8
      }
    }
  ]
}
