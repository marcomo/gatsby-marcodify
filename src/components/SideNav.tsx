import { graphql, useStaticQuery, Link } from "gatsby";
import React from "react";

const SideNav: React.FunctionComponent = () => {
  // Get all markdown pages, title and slug
  const data = useStaticQuery<Queries.SideNavQuery>(graphql`
  query SideNav {
    allMdx {
      nodes {
        id
        frontmatter {
          slug
          heading
        }
      }
    }
  }
`)
  return (
    <ul>
      <p>menu</p>
      {data.allMdx.nodes.map((node) => {
        return node.frontmatter ?
          <li key={node.id}>
            <Link to={node.frontmatter.slug}>{node.frontmatter.heading}</Link>
          </li>
          : null
      })}
    </ul>
  )
};

export default SideNav;
