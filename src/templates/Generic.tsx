import React from "react";
import Layout from "../components/Layout";

const Generic = (props) => {
  return (
    <Layout>
      <h1>{props.pageContext.title}</h1>
      <p>{props.pageContext.description}</p>
    </Layout>
  );
};

export default Generic;
