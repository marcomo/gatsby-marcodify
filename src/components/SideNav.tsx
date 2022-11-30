import { graphql, StaticQuery } from "gatsby";
import React from "react";

const SideNav = () => {
  return (
    <StaticQuery
      query={sidebarQuery}
      render={(data) => {
        return (
          <ul>
            {data.allMarkdownRemark.nodes.map((node) => (
              <li key={node.id}>
                <a href={node.frontmatter.slug}>{node.frontmatter.title}</a>
              </li>
            ))}
          </ul>
        );
      }}
    />
  );
};

export const sidebarQuery = graphql`
  query {
    allMarkdownRemark {
      nodes {
        id
        frontmatter {
          slug
          title
        }
      }
    }
  }
`;

export default SideNav;
