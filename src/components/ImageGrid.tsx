import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { PropsWithChildren } from 'react';
import Grid, { IProps as IGridProps } from './layouts/Grid';
import Image from './Image';

interface IProps extends IGridProps {
  id: string;
  frontmatter: Queries.ProjectImagesQuery['mdx']['frontmatter'];
  showCaptions?: boolean;
}

const ImageGrid: React.FunctionComponent<PropsWithChildren<IProps>> = (
  props
) => {
  return (
    <Grid
      lgrows={props.lgrows}
      lgcolumns={props.lgcolumns}
      mdcolumns={props.mdcolumns}
      mdrows={props.mdrows}
      className={props.className || ''}
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
                objectFit="contain"
                imgStyle={{ maxHeight: '75vh' }}
                style={{ maxHeight: '75vh' }}
              />
            </Image>
          </div>
        );
      })}
    </Grid>
  );
};

export default ImageGrid;
