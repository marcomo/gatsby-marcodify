import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { PropsWithChildren } from 'react';
import Media from 'react-media';
import Image from './Image';
import Grid from './layouts/Grid';

const ProjectSection: React.FunctionComponent<
  PropsWithChildren<{
    id: string;
    data: Queries.MdxQuery;
    imgGridClassName?: string;
    imgGridItemClassNames?: Record<`gridarea-${number}`, string>;
  }>
> = (props) => {
  const imageIndexes = props.data?.mdx.frontmatter.images.reduce(
    (acc, img, i) => {
      if (img.childrenImageSharp[0].original.src.includes(props.id)) {
        acc.push(i);
      }
      return acc;
    },
    []
  );

  const frontmatter = {
    ...props.data.mdx.frontmatter,
    images: props.data.mdx.frontmatter.images.filter((img, i) =>
      imageIndexes.includes(i)
    ),
  };

  return (
    <Media query={'(max-width: 480px)'}>
      {(matches) => (
        <Grid
          lgrows={1}
          lgcolumns={2}
          mdcolumns={1}
          mdrows={2}
          className="thin-row-gaps"
        >
          <div className="gridarea-1">{props.children}</div>
          <div className="gridarea-2">
            <div className={props.imgGridClassName}>
              {frontmatter.images.map((img, i) => {
                const alt = frontmatter.imageAlts[i];
                return (
                  <div
                    key={`${props.id}-${i}`}
                    className={`gridarea-${i + 1} ${
                      props.imgGridItemClassNames?.[`gridarea-${i + 1}`] ?? ''
                    }`}
                  >
                    <Image alt={alt} allowModal={!matches} showCaption={false}>
                      <GatsbyImage
                        key={`image-${i}`}
                        image={getImage(
                          img.childrenImageSharp[0].gatsbyImageData
                        )}
                        alt={alt}
                        objectFit="contain"
                        imgStyle={{ maxHeight: '75vh' }}
                        style={{ maxHeight: '75vh' }}
                      />
                    </Image>
                  </div>
                );
              })}
            </div>
          </div>
        </Grid>
      )}
    </Media>
  );
};

export default ProjectSection;
