import { useStaticQuery } from 'gatsby';
import { graphql } from 'gatsby';
import React, { PropsWithChildren } from 'react';
import ProjectSection from '../../ProjectSection';
import Image from '../../Image';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Media from 'react-media';

const Territories: React.FunctionComponent<
  PropsWithChildren<{
    id: string;
  }>
> = (props) => {
  const data = useStaticQuery<Queries.TerritoriesMdxQuery>(graphql`
    query TerritoriesMdx {
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
  const mobile = images.filter((img) => img.alt.includes('mobile'));

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
          images={mobile}
          caption="Territories 2022 mobile design"
          imgGridClassName={[
            `lg-grid-2-2`,
            `md-grid-3-1`,
            `sm-grid-1-3`,
            'thin-gaps',
            matches.sm ? '' : 'no-figure-margins',
          ].join(' ')}
          imgGridItemClassNames={{
            'gridarea-2': 'lg-row-span-2 lg-row-span-center',
          }}
          sectionGridClassNames={{
            'gridarea-1': matches.lg ? 'pt-2' : '',
          }}
        >
          <h3>Territories</h3>
          <Image
            alt={original.alt}
            allowModal={!matches}
            showCaption={true}
            className={matches.sm ? 'no-figure-margins' : ''}
          >
            <GatsbyImage
              image={getImage(
                original.image.childrenImageSharp[0].gatsbyImageData
              )}
              alt={original.alt}
              objectFit="contain"
              imgStyle={{ maxHeight: '75vh' }}
              style={{ maxHeight: '75vh' }}
            />
          </Image>
          {props.children}
        </ProjectSection>
      )}
    </Media>
  );
};

export default Territories;
