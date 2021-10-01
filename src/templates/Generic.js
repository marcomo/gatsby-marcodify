import React from "react";

const Generic = (props) => {
  return (
    <article>
      <h1>{props.pageContext.title}</h1>
      <p>{props.pageContext.description}</p>
    </article>
  );
};

export default Generic;
