import { useStaticQuery } from 'gatsby';
import { graphql } from 'gatsby';
import React, { PropsWithChildren } from 'react';
import ImageGrid from '../../ImageGrid';

const AppScreens: React.FunctionComponent<
  PropsWithChildren<{
    id: string;
  }>
> = (props) => {
  const data = useStaticQuery<Queries.TerritoriesProjectImagesQuery>(graphql`
    query TerritoriesProjectImages {
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

  console.log(data);

  const imageIndexes = data?.mdx.frontmatter.images.reduce((acc, img, i) => {
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
  };

  return (
    <ImageGrid
      rows={1}
      columns={3}
      frontmatter={frontmatter}
      id={props.id}
      showCaptions={false}
    />
  );
};

export default AppScreens;
