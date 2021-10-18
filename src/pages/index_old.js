import { graphql } from "gatsby";
import React from "react";
import Img from "gatsby-image";
import Layout from "../components/Layout";

const Index = (props) => {
  return (
    <Layout>
      <h1>Hello World!</h1>
      <img src={props.data.file.publicURL.fluid} alt="Marco Morales" />
      <Img fluid={props.data.file.childImageSharp.fluid} alt="Marco Morales" />
      <Img fixed={props.data.file.childImageSharp.fixed} alt="Marco Morales" />
      <Img
        fixed={props.data.file.childImageSharp.fluidWebp}
        alt="Marco Morales"
      />
    </Layout>
  );
};

// https://www.gatsbyjs.com/plugins/gatsby-image/

export const homepageQuery = graphql`
  query homepageQuery {
    file(relativePath: { eq: "IMG_20191012_143626~3.jpg" }, publicURL: {}) {
      publicURL
      childImageSharp {
        fixed(width: 500, height: 500) {
          ...GatsbyImageSharpFixed
        }
        fluid {
          ...GatsbyImageSharpFluid
        }
        fluidWebp: fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default Index;
