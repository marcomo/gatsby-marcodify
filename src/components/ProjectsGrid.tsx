import React, { FC } from 'react';
import ConditionalRender from './ConditionalRender';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import NonBreakingText from './NonBreakingText';
import * as styles from '../stylesheets/projects.module.scss';

const ProjectsGrid: FC = () => {
  // Get all projects so we can generate a list in the Projects view
  const data: Queries.ProjectsQuery = useStaticQuery(graphql`
    query Projects {
      allMdx(
        sort: [{ frontmatter: { order: ASC } }, { frontmatter: { title: ASC } }]
        filter: { internal: { contentFilePath: { regex: "/(/projects/)/" } } }
      ) {
        projects: edges {
          node {
            id
            body
            frontmatter {
              slug
              title
              heading
              company
              description
              thumb {
                childImageSharp {
                  fluid: gatsbyImageData(
                    layout: CONSTRAINED
                    placeholder: BLURRED
                    width: 400
                  )
                }
              }
            }
            internal {
              contentFilePath
            }
          }
        }
      }
    }
  `)
  const { projects } = data.allMdx;
  return (
    <div className={styles.projects}>
      {projects.map((proj) => {
        return (
          <ConditionalRender
            shouldRender={!!proj.node.frontmatter}
            key={proj.node.id}
          >
            <Link className="thumb-link" to={'/projects/' + proj.node.frontmatter?.slug ?? ''}>
              <div className="flex-row justify-center">
                {proj.node.frontmatter?.thumb?.childImageSharp
                  ?.fluid ? (
                  <GatsbyImage
                    image={
                      proj.node.frontmatter?.thumb?.childImageSharp
                        ?.fluid
                    }
                    alt=""
                    loading="eager"
                  />
                ) : null}
              </div>
              <h5 className="h5">{proj.node.frontmatter?.company}</h5>
              <h4 className="h4 m-0"><NonBreakingText text={proj.node.frontmatter?.heading} /></h4>
              <p>{proj.node.frontmatter?.description}</p>
            </Link>
          </ConditionalRender>
        );
      })}
    </div>
  );
};


export default ProjectsGrid;