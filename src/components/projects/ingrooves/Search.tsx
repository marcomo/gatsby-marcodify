import { useStaticQuery } from 'gatsby';
import { graphql } from 'gatsby';
import React, { PropsWithChildren } from 'react';
import ProjectSection from '../../ProjectSection';
import Image from '../../Image';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Media from 'react-media';

const Search: React.FunctionComponent<
  PropsWithChildren<{
    id: string;
  }>
> = (props) => {
  const data = useStaticQuery<Queries.SearchMdxQuery>(graphql`
    query SearchMdx {
      mdx(internal: { contentFilePath: { regex: "/(/trendsnow)/" } }) {
        id
        frontmatter {
          images {
            childrenImageSharp {
              gatsbyImageData(layout: CONSTRAINED, width: 1200)
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

  const images = data.mdx.frontmatter.images
    .reduce((acc, img, i) => {
      if (img.childrenImageSharp[0].original.src.includes(props.id)) {
        acc.push(i);
      }
      return acc;
    }, [])
    .map((index) => ({
      image: data.mdx.frontmatter.images[index],
      alt: data.mdx.frontmatter.imageAlts[index],
    }));

  const original = images.find((img) => img.alt.includes('MVP'));
  const mobile = images.find((img) => img.alt.includes('mobile'));

  return (
    <Media
      queries={{
        sm: '(max-width: 480px)',
        md: '(max-width: 1200px)',
        lg: '(min-width: 1201px)',
      }}
    >
      {(matches) => (
        <ProjectSection
          id={props.id}
          images={[mobile]}
          imageGridArea={matches.lg ? 1 : 2}
          imgGridClassName={[`lg-grid-1-1`, `md-grid-1-1`, `sm-grid-1-1`].join(
            ' '
          )}
          sectionGridClassNames={{
            'gridarea-1': matches.lg ? 'pt-2' : '',
          }}
          caption={mobile.alt}
        >
          {props.children}
        </ProjectSection>
      )}
    </Media>
  );
};

export default Search;
