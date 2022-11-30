import { graphql, useStaticQuery, Link } from "gatsby";
import React from "react";

const SideNav: React.FunctionComponent = () => {
  // Get all markdown pages, title and slug
  const data = useStaticQuery<Queries.SideNavQuery>(graphql`
  query SideNav {
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
`)
  return (
    <ul>
      <p>menu</p>
      {data.allMarkdownRemark.nodes.map((node) => {
        return node.frontmatter ?
          <li key={node.id}>
            <Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link>
          </li>
          : null
      })}
    </ul>
  )
};

export default SideNav;
