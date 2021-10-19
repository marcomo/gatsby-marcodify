import React from "react";
import Img from "gatsby-image";

const FeaturedImage = (props) => {
  return (
    (props.featuredImage && (
      <Img
        fluid={props.featuredImage.childImageSharp.fluid}
        alt="Pursued by Bear"
        loading="eager"
        fadeIn={false}
      />
    )) ||
    null
  );
};

export default FeaturedImage;
