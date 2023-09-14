import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import PrototypeGrid from '@components/PrototypeGrid';

const Prototypes = () => {
  const data = useStaticQuery<Queries.ProjectPrototypesQuery>(graphql`
    query ProjectPrototypes {
      mdx(internal: { contentFilePath: { regex: "/(/agl_ivi_navigation)/" } }) {
        frontmatter {
          prototypes
        }
      }
    }
  `);
  return (
    <PrototypeGrid prototypes={data.mdx.frontmatter.prototypes} id="jlr-nav" />
  );
};

export default Prototypes;
