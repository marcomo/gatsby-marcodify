import React from "react";
import Layout from "./src/components/Layout";
import "./src/stylesheets/global.scss";
import GlobalProvider from "./src/components/GlobalProvider";

export const wrapRootElement = ({ element }) => (
  <GlobalProvider>{element}</GlobalProvider>
);

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);
