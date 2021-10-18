exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        path: require.resolve("path-browserify"),
      },
      fallback: {
        fs: false,
      },
    },
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
  type MarkdownRemark implements Node {
    frontmatter: Frontmatter
  }
  type Frontmatter @infer {
    title: String
    description: String
    slug: String!
    featuredImage: File @fileByRelativePath
  }
`;
  createTypes(typeDefs);
};

const path = require("path");
const data = require("./src/data/page_data");

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  data.forEach((page) => {
    createPage({
      path: page.slug,
      component: path.resolve("./src/templates/Generic.js"),
      context: {
        title: page.title,
        description: page.description,
      },
    });
  });

  // How many markdown pages do I have; just give me the slug
  const mdPages = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  // build pages with Markdown template; pass the slug to look up the page
  mdPages.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: path.resolve("./src/templates/Markdown.js"),
      context: {
        slug: node.frontmatter.slug,
      },
    });
  });
};
