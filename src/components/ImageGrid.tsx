import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { PropsWithChildren } from 'react';
import Grid from './layouts/Grid';
import Image from './Image';

const ImageGrid: React.FunctionComponent<
  PropsWithChildren<{
    rows: number;
    columns: number;
    id: string;
    frontmatter: Queries.ProjectImagesQuery['mdx']['frontmatter'];
    showCaptions?: boolean;
    classNames?: string;
  }>
> = (props) => {
  return (
    <Grid
      rows={props.rows}
      columns={props.columns}
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
