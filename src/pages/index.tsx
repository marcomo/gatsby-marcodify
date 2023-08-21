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
    <main>
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
        <h2>Projects</h2>
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
      <section className="mt-8">
        <h2>About Me</h2>
        <Grid lgcolumns={3} lgrows={1}>
          <div className="gridarea-1">
            <h3>Cross-functional Experience</h3>
            <p>
              Frontend Developer, Design Technologist, Visual Designer, Art Director.
              I&rsquo;ve done each role separately and all at once. I can deliver user
              interfaces from design concept to shipped code and can adapt to the
              needs of product and engineering teams.
              {/* Throughout my career I&rsquo;ve been creating and building
              designs. When in advertising, I started in print production and
              moved on to art direction.&nbsp;&nbsp;While I ran my own business,
              I designed and built websites and marketing
              collateral.&nbsp;&nbsp;And in the tech space, I&rsquo;ve designed
              and coded entire products from zero to one to<i>&nbsp;n.</i>
              &nbsp;&nbsp;This experience has lead me to focus on design
              technology: the craft of bringing creative concepts to life. */}
            </p>
          </div>
          <div className="gridarea-2">
            <h3>Design Engineering</h3>
            <p>
              Design tooling keeps design details from getting lost in translation.
              My experience includes design systems, visual testing, and component libraries.
              I&rsquo;ve helped increase design-to-code efficiency levering
              the power of tools like Figma, Storybook, and CI/CD automation.
              {/* Don&rsquo;t let my frontend developer experience sway you to think
              I&rsquo;m just an engineer who dabbles in design. I&rsquo;m a
              designer first. We build to fulfill design. And design to fulfill
              user needs. My goal is to honor the design and user experience. We
              know design and engineering can sometimes be at odds. So I aim to
              use my cross-functional experience to help keep things from
              getting lost in translation. We&rsquo;re all in this together,
              right? */}
            </p>
          </div>
          <div className="gridarea-3">
            <h3>Prototyping</h3>
            <p>
              Prototypes are the best way to get user and stakeholder feedback
              and to test code functionality and complexity. I build
              functional prototypes in a range of design tools and JavaScript
              frameworks including Figma, Framer, React, and NextJS.
            </p>
          </div>
        </Grid>
      </section>
      <section className="mt-8">
        <h3>Interested?</h3>
        <p>
          I&rsquo;m open to full-time and contract work as a Design Engineer.
          <br />
          But if you have another role that suits me, please reach out.
        </p>
        <p className="green">me @ marcodify dot com</p>
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
