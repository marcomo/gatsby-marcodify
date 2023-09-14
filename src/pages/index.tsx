import { graphql, Link, PageProps } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import ConditionalRender from '@components/ConditionalRender';
import Grid from '@components/layouts/Grid';
import * as styles from '../stylesheets/projects.module.scss';

const Index: React.FunctionComponent<PageProps<Queries.HomeProjectsQuery>> = ({
  data,
}) => {
  const { projects } = data.allMdx;
  return (
    <main className="xl-py-8 lg-py-8 md-py-8 sm-py-8">
      <section>
        <Grid xlrows={1} xlcolumns={2} lgrows={1} lgcolumns={2}>
          <div className="gridearea-1" style={{ minWidth: '20rem' }}>
            <h1 className="mt-0 brand-font">
              <span className="opacity-80">At the intersection<br />of </span>
              <strong className="opacity-100">design</strong><span className="opacity-80"> and </span><strong className="opacity-100">technology,</strong>
              <span className="opacity-80">
                <br />
                you&rsquo;ve got to look{' '}
                <span className="text-no-wrap">both ways.</span>
              </span>
            </h1>
          </div>
          <div className="gridarea-2">
            <p className="mt-0">
              <strong>
                Cross-functional UI developer with 10+ years implementing and
                designing web apps, design systems, and prototypes.
              </strong>
            </p>
            <p>
              I accelerate time-to-delivery and accuracy through intuition
              for design and technology that comes through hands-on experience
              as a designer and engineer. My goal is to help designers and
              companies advance their ideas and help customers get to the next
              part of their journey.
            </p>
          </div>
        </Grid>
      </section>
      <section className="mt-8">
        <h2 className="h2">Projects</h2>
        <div className="flex-row">
          <div className="flex-item">
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
                      <h4 className="h4">{proj.node.frontmatter?.title}</h4>
                      <p>{proj.node.frontmatter?.description}</p>
                    </Link>
                  </ConditionalRender>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="mt-8">
        <h2 className="h2">About Me</h2>
        <Grid
          xlcolumns={3}
          xlrows={2}
          lgcolumns={3}
          lgrows={2}
          lgColGaps={4}
          lgRowGaps={4}
          mdRowGaps={4}
          lgTemplateRows="1fr auto"
          className="mb-8"
        >
          <div className="gridarea-1">
            <h3 className="h3">Cross-functional Experience</h3>
            <p>
              Frontend Developer, Design Technologist, Visual Designer, Art Director.
              I&rsquo;ve done each role separately and all at once. I can deliver user
              interfaces from design concept to shipped code and can adapt to the
              needs of product and engineering teams.
            </p>
          </div>
          <div className="gridarea-2">
            <h3 className="h3">Design Engineering</h3>
            <p>
              Design tooling keeps design details from getting lost in translation.
              My experience includes design systems, visual testing, and component libraries.
              I&rsquo;ve helped increase design-to-code efficiency levering
              the power of tools like Figma, Storybook, and CI/CD automation.
            </p>
          </div>
          <div className="gridarea-3">
            <h3 className="h3">Prototyping</h3>
            <p>
              Prototypes are the best way to get user and stakeholder feedback
              and to test code functionality and complexity. I build
              functional prototypes in a range of design tools and JavaScript
              frameworks including Figma, Framer, React, and NextJS.
            </p>
          </div>
          <div className="gridarea-4 lg-col-span-2">
            <h3 className="h3">Interested?</h3>
            <p>
              I&rsquo;m open to full-time and contract work as a Design Engineer.
              <br />
              But if you have another role that suits me, please reach out.
            </p>
            <p className="color-green"><a href='mailto:me@marcodify.com'>me @ marcodify . com</a></p>
          </div>
        </Grid>
      </section>
    </main>
  );
};

export default Index;

// Get all projects so we can generate a list in the Projects view
export const query = graphql`
  query HomeProjects {
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
