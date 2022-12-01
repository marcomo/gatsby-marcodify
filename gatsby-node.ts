import path from "path";
import type { GatsbyNode } from "gatsby";

export const onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        path: path.resolve("path-browserify"),
      },
      fallback: {
        fs: false,
      },
    },
  });
};

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
  type MarkdownRemark implements Node {
    frontmatter: Frontmatter
  }
  type Frontmatter @infer {
    title: String
    description: String
    h1: String
    slug: String!
    featuredImage: File @fileByRelativePath
  }
`;
  createTypes(typeDefs);
};



export const createPages: GatsbyNode["createPages"] = async ({ actions, graphql }) => {
  const { createPage } = actions;

  // How many markdown pages do I have; just give me the slug
  const mdPages = await graphql<Queries.AllMarkdownQuery>(`
    query AllMarkdown {
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
  mdPages.data?.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter?.slug ?? "",
      component: path.resolve("./src/templates/Markdown.tsx"),
      context: {
        slug: node.frontmatter?.slug,
      },
    });
  });
};
