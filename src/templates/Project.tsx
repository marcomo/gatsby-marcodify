import React from 'react';
import { PageProps } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { project, conceptBadge, intro, credits } from './project.module.scss';
import FeaturedImage from '../components/FeaturedImage';
import { MDXProvider } from '@mdx-js/react';

type PropsType = Queries.AllMdxProjectsQuery['allMdx']['edges'][number];
type ContextType = PropsType['node'];

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
    <main className={[project, 'width-control'].join(' ')}>
      <header className="lg-grid-2-1 md-grid-1-2">
        <div className="gridarea-1 my-auto">
          <div className="text-label">
            <span>{frontmatter?.company}</span>
          </div>
          <h1>{frontmatter?.h1}</h1>
          {frontmatter?.isConcept ? (
            <div className={conceptBadge}>concept</div>
          ) : null}
          <p className={intro}>{frontmatter?.description}</p>
          <div className={credits}>
            <div className="flex-item">
              <h2 className="text-label-med">position</h2>
              <p>{frontmatter?.position}</p>
            </div>
            <div className="flex-item">
              <h2 className="text-label-med">
                role{roles.length > 1 ? 's' : ''}
              </h2>
              {roles.map((role, i) => (
                <p key={`${role.replace(' ', '-')}-${i}`}>{role}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="gridarea-2 flex-row flex-center">{featuredImgNode}</div>
      </header>
      <article>{props.children}</article>
    </main>
  );
};

const Project: React.FunctionComponent<PageProps<PropsType, ContextType>> = (
  props
) => {
  return (
    <MDXProvider
      components={{
        p: (props) => <p>{props.children}</p>,
      }}
    >
      <ProjectSection {...props} />
    </MDXProvider>
  );
};

export default Project;
