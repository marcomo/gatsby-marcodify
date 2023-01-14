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
  }>
> = (props) => {
  return (
    <Grid rows={props.rows} columns={props.columns}>
      {props.frontmatter.images.map((img, i) => {
        const alt = props.frontmatter.imageAlts[i];
        return (
          <div key={`${props.id}-${i}`} className={`gridarea-${i + 1}`}>
            <Image alt={alt} allowModal showCaption>
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
