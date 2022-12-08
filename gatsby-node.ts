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
    title: String!
    description: String
    h1: String
    company: String
    client: String
    role: String
    slug: String!
    thumb: File @fileByRelativePath
    featuredImg: File @fileByRelativePath
    images: [File] @fileByRelativePath
  }
`;
  createTypes(typeDefs);
};



export const createPages: GatsbyNode["createPages"] = async ({ actions, graphql }) => {
  const { createPage } = actions;

  // How many markdown pages do I have; just give me the slug
  const mdPages = await graphql<Queries.AllMarkdownPagesQuery>(`
    query AllMarkdownPages {
      allMarkdownRemark(filter: {id: {}, fileAbsolutePath: {regex: "/(/pages/)/"}}) {
        edges {
          node {
            id
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


  // How many markdown pages do I have; just give me the slug
  const mdProjects = await graphql<Queries.AllMarkdownProjectsQuery>(`
  query AllMarkdownProjects {
    allMarkdownRemark(filter: {id: {}, fileAbsolutePath: {regex: "/(/projects/)/"}}) {
      edges {
        node {
          id
          html
          frontmatter {
            slug
            title
            h1
            description
            images {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED width: 800)
                resize {
                  aspectRatio
                }
                id
              }
            }
          }
        }
      }
    }
  }
  `);

  // create a project page for each in query
  // using Project template
  mdProjects.data?.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage<Partial<typeof node>>({
      path: "/projects/" + (node.frontmatter?.slug ?? ""),
      component: path.resolve("./src/templates/Project.tsx"),
      context: {
        html: node.html,
        frontmatter: node.frontmatter
      }
    });
  });
};
