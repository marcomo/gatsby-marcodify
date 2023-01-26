import { useStaticQuery } from 'gatsby';
import { graphql } from 'gatsby';
import React, { PropsWithChildren } from 'react';
import ProjectSection from '../../ProjectSection';

const Territories: React.FunctionComponent<
  PropsWithChildren<{
    id: string;
  }>
> = (props) => {
  const data = useStaticQuery<Queries.MdxQuery>(graphql`
    query Mdx {
      mdx(internal: { contentFilePath: { regex: "/(/trendsnow)/" } }) {
        id
        frontmatter {
          images {
            childrenImageSharp {
              gatsbyImageData(layout: CONSTRAINED, width: 650)
              original {
                src
              }
            }
          }
          imageAlts
          h1
        }
      }
    }
  `);

  return (
    <ProjectSection
      id={props.id}
      data={data}
      imgGridClassName={[
        `lg-grid-2-2`,
        `md-grid-3-1`,
        `sm-grid-1-3`,
        'thin-gaps',
      ].join(' ')}
      imgGridItemClassNames={{
        'gridarea-2': 'lg-row-span-2 lg-row-span-center',
      }}
    >
      {props.children}
    </ProjectSection>
  );
};

export default Territories;
