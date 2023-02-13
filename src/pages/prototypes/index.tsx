import { graphql, PageProps } from 'gatsby';
import React from 'react';
import PrototypeGrid from '../../components/PrototypeGrid';

const Index: React.FunctionComponent<PageProps<Queries.PrototypesQuery>> = ({
  data,
}) => {
  const { edges } = data.allMdx;
  const prototypes = edges.reduce((acc, edge) => {
    const protos = edge.node.frontmatter?.prototypes ?? [];
    return [...acc, ...protos];
  }, []);
  return (
    <main>
      <h1>Prototypes</h1>
      <p>A sampling of high-fidelity protoypes built in Figma</p>
      <div className="mt-8">
        <PrototypeGrid id="prototypes-index" prototypes={prototypes} />
      </div>
    </main>
  );
};

export default Index;

// Get all prototypes so we can generate a list in the prototypes view
export const query = graphql`
  query Prototypes {
    allMdx(
      sort: [{ frontmatter: { rank: ASC } }, { frontmatter: { title: ASC } }]
      filter: {
        internal: { contentFilePath: { regex: "/(/projects/)/" } }
        frontmatter: { prototypes: { ne: null } }
      }
    ) {
      edges {
        node {
          frontmatter {
            prototypes
          }
        }
      }
    }
  }
`;
