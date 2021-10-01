exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        path: require.resolve("path-browserify"),
      },
      fallback: {
        fs: false,
      },
    },
  });
};

const path = require("path");
const data = require("./data");

exports.createPages = ({ actions }) => {
  const { createPage } = actions;
  data.forEach((page) => {
    createPage({
      path: page.slug,
      component: path.resolve("./src/templates/Generic.js"),
      context: {
        title: page.title,
        description: page.description,
      },
    });
  });
  createPage({
    path: "/created",
    component: path.resolve("./src/templates/Generic.js"),
  });
};
