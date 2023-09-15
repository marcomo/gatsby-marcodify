import React from 'react';
import { PageProps } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { project, conceptBadge, intro, credits, h2 } from './project.module.scss';
import FeaturedImage from '@components/FeaturedImage';
import { MDXProvider } from '@mdx-js/react';
import Image from '@components/Image';
import Grid from '@components/layouts/Grid';
import ExternalLink from '@components/ExternalLink';
import IframeEmbed from '@components/IframeEmbed';
import EmbedContainer from '@components/EmbedContainer';
import NonBreakingText from "@components/NonBreakingText";

type PropsType = Queries.AllMdxProjectsQuery['allMdx']['edges'][number];
type ContextType = PropsType['node'];

const shortcodes = { Image, Grid, ExternalLink, IframeEmbed, EmbedContainer }

const ProjectSection: React.FunctionComponent<
  PageProps<PropsType, ContextType>
> = (props) => {
  const { frontmatter } = props.pageContext;
  const featuredImg = getImage(
    frontmatter?.featuredImg?.childImageSharp ?? null
  );

  const featuredImgNode = featuredImg && (
    <FeaturedImage image={featuredImg} alt={frontmatter?.title ?? ''} />
  );

  const roles = frontmatter?.role ?? [];

  return (
    <main className={[project, 'width-control', 'xl-pt-8', 'lg-pt-8', 'md-pt-8', 'sm-pt-8'].join(' ')}>
      <header>
        <Grid
          xlcolumns={2}
          xlrows={1}
          lgcolumns={2}
          lgColGaps={2}
          mdTemplateRows="auto 1fr"
          lgTemplateColumns="auto 60%"
          xlTemplateColumns="auto 55%"
          lgrows={1}
          mdcolumns={1}
          mdrows={2}
          mdRowGaps={4}
          smcolumns={1}
          smrows={2}
          smRowGaps={1}
        >
          <div className="gridarea-1 my-auto sm-pr-4">
            <div className="text-label">
              <span>{frontmatter?.company}</span>
            </div>
            <h1 className="brand-font"><NonBreakingText text={frontmatter?.heading} /></h1>
            {frontmatter?.isConcept ? (
              <div className={conceptBadge}>concept</div>
            ) : null}
            <p className={intro}>{frontmatter?.description}</p>
            <div className={credits}>
              {
                frontmatter?.position ?
                  <div className="flex-item">
                    <h2 className={h2 + " text-label-med"}>position</h2>
                    <p>{frontmatter?.position}</p>
                  </div> : null
              }
              <div className="flex-item">
                <h2 className={h2 + " text-label-med"}>
                  role{roles.length > 1 ? 's' : ''}
                </h2>
                {roles.map((role, i) => (
                  <p key={`${role.replace(' ', '-')}-${i}`}>{role}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="gridarea-2 flex-row flex-center">{featuredImgNode}</div>
        </Grid>
      </header>
      <article className="pt-8">{props.children}</article>
    </main>
  );
};

const Project: React.FunctionComponent<PageProps<PropsType, ContextType>> = (
  props
) => {
  return (
    <MDXProvider
      components={{
        ...shortcodes,
        p: (props) => <p>{props.children}</p>,
        h2: (props) => <h2 className="h2">{props.children}</h2>,
        h3: (props) => <h3 className="h3">{props.children}</h3>,
        h4: (props) => <h4 className="h4">{props.children}</h4>
      }}
    >
      <ProjectSection {...props} />
    </MDXProvider>
  );
};

export const Head: React.FunctionComponent<
  PageProps<PropsType, ContextType>
> = (props) => {
  return <title>{props.pageContext.frontmatter.title}</title>
}

export default Project;
