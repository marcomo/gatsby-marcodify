import { useStaticQuery } from 'gatsby';
import { graphql } from 'gatsby';
import React, { PropsWithChildren } from 'react';
import ImageGrid from '@components/ImageGrid';

const AppScreens: React.FunctionComponent<
  PropsWithChildren<{
    id: string;
  }>
> = (props) => {
  const data = useStaticQuery<Queries.ProjectUserflowImagesQuery>(graphql`
    query ProjectUserflowImages {
      mdx(internal: { contentFilePath: { regex: "/(/agl_ivi_navigation)/" } }) {
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
          heading
        }
      }
    }
  `);
  const imageIndexes = data.mdx.frontmatter.images.reduce((acc, img, i) => {
    if (img.childrenImageSharp[0].original.src.includes('wireflow')) {
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
    <ImageGrid
      xlrows={2}
      xlcolumns={2}
      lgrows={2}
      lgcolumns={2}
      lgColGaps={4}
      lgRowGaps={4}
      mdRowGaps={4}
      frontmatter={frontmatter}
      id={props.id}
      showCaptions
      className="no-figure-margins"
    />
  );
};

export default AppScreens;
