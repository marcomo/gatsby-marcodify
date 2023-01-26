import { graphql, Link, PageProps } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import ConditionalRender from '../components/ConditionalRender';
import Grid from '../components/layouts/Grid';
import * as styles from '../stylesheets/projects.module.scss';

const Index: React.FunctionComponent<PageProps<Queries.HomeProjectsQuery>> = ({
  data,
}) => {
  const { projects } = data.allMdx;
  return (
    <main className="width-control">
      <section>
        <Grid lgrows={1} lgcolumns={2} mdrows={2} mdcolumns={1}>
          <div className="gridearea-1" style={{ minWidth: '20rem' }}>
            <h1 className="mt-0">
              At the intersection
              <br />
              of <strong>design</strong> and <strong>technology,</strong>
              <br />
              you&rsquo;ve got to look{' '}
              <span className="text-no-wrap">both ways.</span>
            </h1>
          </div>
          <div
            className="gridarea-2"
            style={{ marginRight: '5%', marginTop: '.5rem' }}
          >
            <p>
              Product design moves fast. Nobody wants to make a wrong turn. So
              I&rsquo;m doing my part to navigate ideas from concept to
              prototype to production.
            </p>
            <p>
              I merge design and technology to help design teams build complex
              interfaces, high fidelity prototypes, and coded UIs. To help get
              ideas to their destination.
            </p>
          </div>
        </Grid>
      </section>
      <section>
        <h3>Projects</h3>
        <div className="flex-row">
          <div className="flex-item">
            <div className={styles.projects}>
              {projects.map((proj) => {
                return (
                  <ConditionalRender
                    shouldRender={!!proj.node.frontmatter}
                    key={proj.node.id}
                  >
                    <Link to={'/projects/' + proj.node.frontmatter?.slug ?? ''}>
                      <div className={proj.node.id}>
                        {proj.node.frontmatter?.thumb?.childImageSharp
                          ?.fluid ? (
                          <GatsbyImage
                            image={
                              proj.node.frontmatter?.thumb?.childImageSharp
                                ?.fluid
                            }
                            loading="eager"
                            alt=""
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
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;

// Get all projects so we can generate a list in the Projects view
export const query = graphql`
  query HomeProjects {
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
