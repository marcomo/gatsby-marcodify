import { faLongArrowRight } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Layout from '../components/Layout';
import { PageProps } from "gatsby";
import { GatsbyImage, IGatsbyImageData, getImage } from 'gatsby-plugin-image';
import { gatsbyImage, project } from "./project.module.scss";

type ContextType = Queries.AllMarkdownProjectsQuery["allMarkdownRemark"]["edges"][number]["node"]

const Project: React.FunctionComponent<PageProps<Queries.AllMarkdownProjectsQuery["allMarkdownRemark"]["edges"][number], ContextType>> = (props) => {
  const { html, frontmatter } = props.pageContext
  const maxWidth = Math.max(...(frontmatter?.images ?? []).map(image => image?.childImageSharp?.gatsbyImageData.width || -1))
  const minWidth = Math.min(...(frontmatter?.images ?? []).map(image => image?.childImageSharp?.gatsbyImageData.width || NaN))
  const maxHeight = Math.max(...(frontmatter?.images ?? []).map(image => image?.childImageSharp?.gatsbyImageData.height || -1))
  const minHeight = Math.min(...(frontmatter?.images ?? []).map(image => image?.childImageSharp?.gatsbyImageData.height || NaN))
  console.log({maxHeight, maxWidth, minHeight, minWidth})
  return (
    <Layout>
      <section className={project}>
        <header>
          <h1>{frontmatter?.h1}</h1>
        </header>
        <article>
          <p>{frontmatter?.description}</p>
          <div style={{display: "flex", flexWrap: "wrap"}}>
            {
              frontmatter?.images?.map(image => {
                console.log("raw:", image)
                const aspectRatio = image?.childImageSharp?.resize?.aspectRatio ?? 1
                console.log({aspectRatio})
                const img = getImage(image?.childImageSharp ?? null)
                const width = img?.width
                const height = img?.height
                console.log(img)
                return img ? (
                  <GatsbyImage
                    image={img}
                    alt=""
                    // styles applied to outer gatsby-image-wrapper
                    style={{
                      outline: "1px solid red",
                      // maxHeight: aspectRatio < 1 ? minHeight : maxHeight,
                      maxWidth: aspectRatio < 1 ? minHeight * aspectRatio : width
                    }}
                    imgStyle={{
                      outline: "1px solid green",
                      // maxHeight: aspectRatio < 1 ? minHeight : maxHeight,
                      maxWidth: aspectRatio < 1 ? minHeight * aspectRatio : width
                    }}
                    key={image?.childImageSharp?.id} className={gatsbyImage}
                  />
                ) : null
              })
            }
          </div>
          <div dangerouslySetInnerHTML={{ __html: html ?? "" }} />
        </article>
        <FontAwesomeIcon icon={faLongArrowRight} />
      </section>
    </Layout>
  );
};

export default Project;