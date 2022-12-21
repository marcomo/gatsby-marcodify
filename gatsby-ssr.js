import React from "react";
import Layout from "./src/components/Layout";
import GlobalProvider from "./src/components/GlobalProvider";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="fontawesome6pro"
      src="https://kit.fontawesome.com/511c1dbf08.js"
      crossOrigin="anonymous"
    ></script>,
  ]);
};

export const wrapRootElement = ({ element }) => (
  <GlobalProvider>{element}</GlobalProvider>
);

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);
