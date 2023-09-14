import { useStaticQuery } from 'gatsby';
import { graphql } from 'gatsby';
import React, { PropsWithChildren } from 'react';
import ProjectSection from '@components/ProjectSection';
import Image from '@components/Image';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Media from 'react-media';

const OnTheMove: React.FunctionComponent<
  PropsWithChildren<{
    id: string;
  }>
> = (props) => {
  const data = useStaticQuery<Queries.OnTheMoveMdxQuery>(graphql`
    query OnTheMoveMdx {
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

  const desktop = images.find((img) => img.alt.includes('desktop'));
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
          imgGridClassName={[`lg-grid-1-1`, `md-grid-1-1`, `sm-grid-1-1`].join(
            ' '
          )}
          sectionGridClassNames={{
            'gridarea-1': matches.lg ? 'pt-2' : '',
          }}
          caption={mobile.alt}
        >
          <Image
            alt={desktop.alt}
            allowModal={!matches}
            showCaption={true}
            className={matches.sm ? 'no-figure-margins' : ''}
          >
            <GatsbyImage
              image={getImage(
                desktop.image.childrenImageSharp[0].gatsbyImageData
              )}
              alt={desktop.alt}
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

export default OnTheMove;
