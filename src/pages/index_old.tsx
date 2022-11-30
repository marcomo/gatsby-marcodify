import { graphql, PageProps } from "gatsby";
import React from "react";
import { GatsbyImage, getImage, getSrc } from "gatsby-plugin-image";
import Layout from "../components/Layout";

const Index: React.FunctionComponent<PageProps<Queries.IndexQuery>> = (props) => {
  console.log(props.data)
  console.log(props?.data?.file?.childImageSharp?.fixed)
  const src = getSrc(props.data.file?.childImageSharp?.fluid ?? {} as any)
  const img = getImage(props.data.file ?? {} as any) ?? {} as any
  console.log(img)
  return (
    <Layout>
      <div>
        <h1>Hello World!</h1>
        <div>
          <p>This is original (fallback) image:</p>
          <img src={src} alt="Marco Morales" />
          <br />
          <br />
          <p>This is the fluid image set to 100vw, maxWidth: 800px:</p>
          <div style={{maxWidth: "800px", maxHeight: "800px", width: "100vw", height: "auto"}}>
            <GatsbyImage image={props?.data?.file?.childImageSharp?.fluid ?? {} as any} alt="Marco Morales" />
          </div>
          <p>This is the fixed image set to 500 x 500</p>
          <GatsbyImage image={props?.data?.file?.childImageSharp?.fixed ?? {} as any} alt="Marco Morales" />
        </div>
      </div>
      {/*
      <GatsbyImage
        fixed={img.childImageSharp.fluidWebp}
        alt="Marco Morales"
      /> */}
    </Layout>
  );
};

// https://www.gatsbyjs.com/plugins/gatsby-plugin-image/

export const homepageQuery = graphql`
  query Index {
    file(relativePath: { eq: "IMG_20191012_143626~3.jpg" }) {
      publicURL
      childImageSharp {
        fluid: gatsbyImageData
        fixed: gatsbyImageData(width: 500 height: 500)
      }
    }
  }
`;

//   fixed {
//     gatsbyImageData(layout: FIXED, width: 500, height: 500)
//   }
//   fluid {
//     gatsbyImageData(layout: [AUTO])
//   }
//   fluidWebp: fluid {
//     gatsbyImageData(layout: FLUID)
//   }
// }

export default Index;
