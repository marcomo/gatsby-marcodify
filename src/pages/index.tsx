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
    <>
      <Grid rows={1} columns={2} className="cols-30-70">
        <div className="gridearea-1" style={{ minWidth: '20rem' }}>
          <h1>
            Designing UIs
            <br />
            with heart.
            <br />
            And Figma.
            <br />
            And code.
          </h1>
        </div>
        <div
          className="gridarea-2"
          style={{ marginRight: '5%', marginTop: '.5rem' }}
        >
          <p>
            I&rsquo;m a UI developer and designer doing everything I can to keep
            digital products from getting lost in translation.
          </p>

          <p>
            It&rsquo;s a pleasure to craft complex web apps, interactive
            experiences, and visual stories. All to create meaningful user
            experiences and help businesses succeed.
          </p>
        </div>
      </Grid>
      <h3 className="mt-4">Projects</h3>
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
                      {proj.node.frontmatter?.thumb?.childImageSharp?.fluid ? (
                        <GatsbyImage
                          image={
                            proj.node.frontmatter?.thumb?.childImageSharp?.fluid
                          }
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
    </>
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
                fluid: gatsbyImageData(width: 400, height: 400)
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
