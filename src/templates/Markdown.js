import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLongArrowRight } from "@fortawesome/pro-light-svg-icons";

const Markdown = (props) => {
  const {
    data: {
      markdownRemark: { html },
    },
  } = props;
  return (
    <Layout>
      <article dangerouslySetInnerHTML={{ __html: html }} />
      {/* <FontAwesomeIcon icon={faLongArrowRight} /> */}
    </Layout>
  );
};

// use the passed in slug to lookup the data
export const pageQuery = graphql`
  query ($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description
        slug
        title
      }
    }
  }
`;
export default Markdown;
