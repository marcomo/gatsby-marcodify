import { useStaticQuery } from 'gatsby';
import { graphql } from 'gatsby';
import React, { PropsWithChildren } from 'react';
import ProjectSection from '@components/ProjectSection';
import Image from '@components/Image';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Media from 'react-media';

const Territories: React.FunctionComponent<
  PropsWithChildren<{
    id: string;
  }>
> = (props) => {
  const data = useStaticQuery<Queries.ConceptMdxQuery>(graphql`
    query ConceptMdx {
      mdx(internal: { contentFilePath: { regex: "/(/trendsnow)/" } }) {
        id
        frontmatter {
          images {
            childrenImageSharp {
              gatsbyImageData(layout: CONSTRAINED, width: 1200, placeholder: BLURRED)
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

  const mobileImageIdx = images.findIndex((img) =>
    img.image.childrenImageSharp[0].original.src.includes('grid')
  );

  const desktopImageIdx = mobileImageIdx === 1 ? 0 : 1;

  return (
    <Media
      queries={{
        sm: '(max-width: 480px)',
        md: '(max-width: 1200px)',
        lg: '(min-width: 1201px)',
      }}
    >
      {(matches) => {
        const image = matches.sm
          ? images[mobileImageIdx]
          : images[desktopImageIdx];
        return (
          <ProjectSection
            id={props.id}
            imgGridClassName={['sm-gaps'].join(' ')}
            imgGridItemClassNames={{
              'gridarea-2': 'lg-row-span-2 lg-row-span-center',
            }}
            sectionGridClassNames={{
              'gridarea-1': `col-span-2 no-figure-margins ${matches.lg ? 'pt-2' : ''
                }`,
            }}
          >
            {props.children}
            <Image
              alt={image.alt}
              allowModal={!matches}
              showCaption={true}
              className="mt-4"
            >
              <GatsbyImage
                image={getImage(
                  image.image.childrenImageSharp[0].gatsbyImageData
                )}
                alt={image.alt}
                objectFit="contain"
                imgStyle={{
                  maxHeight: '75vh',
                  margin: 'auto',
                }}
                style={{
                  maxHeight: '75vh',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  display: 'flex',
                }}
              />
            </Image>
          </ProjectSection>
        );
      }}
    </Media>
  );
};

export default Territories;
