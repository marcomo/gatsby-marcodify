import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { PropsWithChildren } from 'react';
import Grid from './layouts/Grid';
import Image from './Image';

const ImageGrid: React.FunctionComponent<
  PropsWithChildren<{
    dtrows: number;
    dtcolumns: number;
    mbrows?: number;
    mbcolumns?: number;
    id: string;
    frontmatter: Queries.ProjectImagesQuery['mdx']['frontmatter'];
    showCaptions?: boolean;
    classNames?: string;
  }>
> = (props) => {
  return (
    <Grid
      dtrows={props.dtrows}
      dtcolumns={props.dtcolumns}
      mbcolumns={props.mbcolumns}
      mbrows={props.mbrows}
      className={props.classNames || ''}
    >
      {props.frontmatter.images.map((img, i) => {
        const alt = props.frontmatter.imageAlts[i];
        return (
          <div key={`${props.id}-${i}`} className={`gridarea-${i + 1}`}>
            <Image alt={alt} allowModal showCaption={props.showCaptions}>
              <GatsbyImage
                key={`image-${i}`}
                image={getImage(img.childrenImageSharp[0].gatsbyImageData)}
                alt={alt}
              />
            </Image>
          </div>
        );
      })}
    </Grid>
  );
};

export default ImageGrid;
