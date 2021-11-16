import React from "react";

export const onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  setHeadComponents([
    <script
      key="fontawesome6pro"
      src="https://kit.fontawesome.com/511c1dbf08.js"
      crossOrigin="anonymous"
    ></script>,
  ]);
};
