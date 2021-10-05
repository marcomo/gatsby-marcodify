import React from "react";
import { graphql } from "gatsby";

const Markdown = (props) => {
  const {
    data: {
      markdownRemark: { frontmatter, html },
    },
  } = props;
  return (
    <article>
      <h2>MARKDOWN</h2>
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.description}</p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
};

// use the passed in slug to lookup the data
export const pageQuery = graphql`
  query ($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        description
        slug
        title
      }
    }
  }
`;
export default Markdown;
