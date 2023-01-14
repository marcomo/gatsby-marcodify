import path from "path";
import type { GatsbyNode } from "gatsby";
const mdxTemplate = path.resolve("./src/templates/Markdown.tsx")
const projectTemplate = path.resolve("./src/templates/Project.tsx")

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
  type Mdx implements Node {
    frontmatter: Frontmatter
  }
  type Frontmatter @infer {
    client: String
    company: String
    description: String
    featuredImg: File @fileByRelativePath
    featuredText: String
    h1: String
    images: [File] @fileByRelativePath
    imageAlts: [String]
    position: String
    skills: [String]
    slug: String!
    title: String!
    thumb: File @fileByRelativePath
  }
`;
  createTypes(typeDefs);
};

export const createPages: GatsbyNode["createPages"] = async ({ actions, graphql }) => {
  const { createPage } = actions;

  // How many markdown pages do I have; just give me the slug
  const mdPages = await graphql<Queries.AllMdxPagesQuery>(`
    query AllMdxPages {
      allMdx(
        filter: {internal: {contentFilePath: {regex: "/(/markdown/pages/)/"}}}
      ) {
        edges {
          node {
            id
            body
            internal {
              contentFilePath
            }
            frontmatter {
              slug
              h1
              description
            }
          }
        }
      }
    }
  `);

  // build pages with Markdown template; pass the slug to look up the page
  mdPages.data?.allMdx.edges.forEach(({ node }) => {
    createPage<Partial<typeof node>>({
      path: node.frontmatter?.slug ?? "",
      component: `${mdxTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: node,
    });
  });


  // How many markdown pages do I have; just give me the slug
  const mdProjects = await graphql<Queries.AllMdxProjectsQuery>(`
    query AllMdxProjects {
      allMdx(
        filter: {internal: {contentFilePath: {regex: "/(/projects)/"}}}
      ) {
        edges {
          node {
            body
            frontmatter {
              description
              company
              featuredImg {
                childImageSharp {
                  gatsbyImageData(layout: CONSTRAINED width: 650)
                  resize {
                    aspectRatio
                  }
                  id
                }
              }
              h1
              images {
                childImageSharp {
                  gatsbyImageData(layout: CONSTRAINED width: 1200)
                  resize {
                    aspectRatio
                  }
                  id
                }
              }
              imageAlts
              slug
              title
              position
              role
            }
            id
            internal {
              contentFilePath
            }
          }
        }
      }
    }
  `);

  // create a project page for each in query
  // using Project template
  mdProjects.data?.allMdx.edges.forEach(({ node }) => {
    createPage<Partial<typeof node>>({
      path: "/projects/" + (node.frontmatter?.slug ?? ""),
      component: `${projectTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        body: node.body,
        frontmatter: node.frontmatter
      }
    });
  });
};
