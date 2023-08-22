import { graphql, Link, PageProps } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import ConditionalRender from '../../components/ConditionalRender';
import * as styles from '../../stylesheets/projects.module.scss';

const Index: React.FunctionComponent<PageProps<Queries.ProjectsQuery>> = ({
  data,
}) => {
  const { projects } = data.allMdx;
  return (
    <main>
      <h2>Projects</h2>
      <div className={styles.projects}>
        {projects.map((proj) => {
          return (
            <ConditionalRender
              shouldRender={!!proj.node.frontmatter}
              key={proj.node.id}
            >
              <Link to={'/projects/' + proj.node.frontmatter?.slug ?? ''}>
                <div className={proj.node.id}>
                  {proj.node.frontmatter?.thumb?.childImageSharp?.fluid ? (
                    <GatsbyImage
                      image={
                        proj.node.frontmatter?.thumb?.childImageSharp?.fluid
                      }
                      alt=""
                      loading="eager"
                    />
                  ) : null}
                </div>
                <h4>{proj.node.frontmatter?.title}</h4>
                <p>{proj.node.frontmatter?.description}</p>
              </Link>
            </ConditionalRender>
          );
        })}
      </div>
    </main>
  );
};

export default Index;

// Get all projects so we can generate a list in the Projects view
export const query = graphql`
  query Projects {
    allMdx(
      sort: [{ frontmatter: { rank: ASC } }, { frontmatter: { title: ASC } }]
      filter: { internal: { contentFilePath: { regex: "/(/projects/)/" } } }
    ) {
      projects: edges {
        node {
          id
          body
          frontmatter {
            slug
            title
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
`;
