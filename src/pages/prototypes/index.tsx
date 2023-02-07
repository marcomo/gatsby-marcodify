import { graphql, PageProps } from 'gatsby';
import React from 'react';
import PrototypeGrid from '../../components/PrototypeGrid';

const Index: React.FunctionComponent<PageProps<Queries.PrototypesQuery>> = ({
  data,
}) => {
  const { prototypes } = data.allMdx;
  return (
    <main>
      <h2>Prototypes</h2>
      <div>
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
      filter: { internal: { contentFilePath: { regex: "/(/projects/)/" } } }
    ) {
      prototypes: distinct(field: { frontmatter: { prototypes: SELECT } })
    }
  }
`;
