import React from "react";
import { graphql, PageProps } from "gatsby";
import Layout from "../components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowRight } from "@fortawesome/pro-light-svg-icons";
import { GatsbyImage } from "gatsby-plugin-image";

const Markdown: React.FunctionComponent<PageProps<Queries.MarkdownQuery>> = (props) => {
  const markdownRemark = props?.data?.markdownRemark
  return (
    <Layout>
      <section style={{flex: "1 0 80%"}}>
        <header>
          <h1>{markdownRemark?.frontmatter?.h1}</h1>
        </header>
        <article dangerouslySetInnerHTML={{ __html: markdownRemark?.html ?? "" }} />
        <FontAwesomeIcon icon={faLongArrowRight} />
      </section>
    </Layout>
  );
};

// use the passed in slug to lookup the data
export const pageQuery = graphql`
  query Markdown ($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        description
        slug
        h1
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    }
  }
`;

export default Markdown;
