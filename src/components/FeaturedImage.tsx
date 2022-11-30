import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const FeaturedImage = (props) => {
  return (
    (props.featuredImage && (
      <GatsbyImage
        image={props.data}
        // fluid={props.featuredImage.childImageSharp.fluid}
        alt="Pursued by Bear"
        loading="eager"
        // fadeIn={false}
      />
    )) ||
    null
  );
};

export default FeaturedImage;
