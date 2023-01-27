import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { PropsWithChildren } from 'react';
import Media from 'react-media';
import Image from './Image';
import Grid from './layouts/Grid';

const ProjectSection: React.FunctionComponent<
  PropsWithChildren<{
    id: string;
    images?: {
      image: Queries.SearchMdxQuery['mdx']['frontmatter']['images'][number];
      alt: Queries.SearchMdxQuery['mdx']['frontmatter']['imageAlts'][number];
    }[];
    contentGridArea?: number;
    imageGridArea?: number;
    imgGridClassName?: string;
    imgGridItemClassNames?: Record<`gridarea-${number}`, string>;
    sectionGridClassNames?: Record<`gridarea-${number}`, string>;
    caption?: string;
  }>
> = (props) => {
  return (
    <Media
      queries={{
        sm: '(max-width: 480px)',
        md: '(max-width: 1200px)',
        lg: '(min-width: 1201px)',
      }}
    >
      {(matches) => (
        <Grid
          lgrows={1}
          lgcolumns={2}
          mdcolumns={1}
          mdrows={2}
          className={`thin-row-gaps ${
            matches.lg ? 'mb-8' : matches.sm ? 'mb-2' : 'mb-4'
          }`}
        >
          <div
            className={`gridarea-${props.imageGridArea === 1 ? 2 : 1} ${
              props.sectionGridClassNames?.[`gridarea-1`] ?? ''
            }`}
          >
            {props.children}
          </div>
          {props.images ? (
            <div
              className={`gridarea-${props.imageGridArea} ${
                props.sectionGridClassNames?.[
                  `gridarea-$${props.imageGridArea}`
                ] ?? ''
              }`}
            >
              <div className={props.imgGridClassName}>
                {props.images.map((img, i) => {
                  const alt = img.alt;
                  return (
                    <div
                      key={`${props.id}-${i}`}
                      className={`gridarea-${i + 1} ${
                        props.imgGridItemClassNames?.[`gridarea-${i + 1}`] ?? ''
                      }`}
                    >
                      <Image
                        alt={alt}
                        allowModal={!matches}
                        showCaption={false}
                      >
                        <GatsbyImage
                          key={`image-${i}`}
                          image={getImage(
                            img.image.childrenImageSharp[0].gatsbyImageData
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
              {props.caption ? (
                <figure className="pt-half">
                  <figcaption>{props.caption}</figcaption>
                </figure>
              ) : null}
            </div>
          ) : null}
        </Grid>
      )}
    </Media>
  );
};

ProjectSection.defaultProps = {
  imageGridArea: 2,
};

export default ProjectSection;
