import { useStaticQuery } from 'gatsby';
import { graphql } from 'gatsby';
import React, { PropsWithChildren } from 'react';
import ImageGrid from '../../../ImageGrid';
import Media from 'react-media';

const AppScreens: React.FunctionComponent<
  PropsWithChildren<{
    id: string;
  }>
> = (props) => {
  const data = useStaticQuery<Queries.ProjectImagesQuery>(graphql`
    query ProjectImages {
      mdx(internal: { contentFilePath: { regex: "/(/agl_ivi_navigation)/" } }) {
        id
        frontmatter {
          images {
            childrenImageSharp {
              gatsbyImageData(layout: CONSTRAINED, width: 650, placeholder: BLURRED)
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
  const imageIndexes = data.mdx.frontmatter.images.reduce((acc, img, i) => {
    if (img.childrenImageSharp[0].original.src.includes('app_screen')) {
      acc.push(i);
    }
    return acc;
  }, []);

  const frontmatter = {
    ...data.mdx.frontmatter,
    images: data.mdx.frontmatter.images.filter((img, i) =>
      imageIndexes.includes(i)
    ),
    imageAlts: data.mdx.frontmatter.imageAlts.filter((alt, i) =>
      imageIndexes.includes(i)
    ),
  };

  return (
    <Media
      queries={{
        sm: '(max-width: 480px)',
        md: '(max-width: 1200px)',
        lg: '(min-width: 1201px)',
      }}
    >
      {(matches) => (
        <ImageGrid
          lgrows={4}
          lgcolumns={2}
          mdrows={4}
          mdcolumns={2}
          frontmatter={frontmatter}
          id={props.id}
          className={matches.sm ? '' : 'no-figure-margins'}
        />
      )}
    </Media>
  );
};

export default AppScreens;
