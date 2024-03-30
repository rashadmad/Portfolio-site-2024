import type { GatsbyConfig } from "gatsby";
import { StaticQuery, graphql } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `rashad madison`,
    siteUrl: `https://www.rashadmadison.com`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-postcss"]
};

module.exports = {
  plugins: [
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
  ],
}

export default config;
