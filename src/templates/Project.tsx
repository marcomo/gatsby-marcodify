import React from 'react';
import { PageProps } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { project } from './project.module.scss';
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

  return (
    <section className={project}>
      <header className="grid-1-2">
        <div className="gridarea-1 my-auto pr-4" style={{ minWidth: '30rem' }}>
          <div className="text-label">
            <span>{frontmatter?.company}</span>
          </div>
          <h1>{frontmatter?.h1}</h1>
          <p>{frontmatter?.description}</p>
          <div className="mt-4">
            <h2 className="text-label-med">position</h2>
            <p>{frontmatter?.position}</p>
            <h2 className="text-label-med">roles</h2>
            {(frontmatter?.role ?? []).map((role, i) => (
              <p key={`${role.replace(' ', '-')}-${i}`}>{role}</p>
            ))}
          </div>
        </div>
        <div className="gridarea-2 flex-row flex-center">{featuredImgNode}</div>
      </header>
      <article>{props.children}</article>
    </section>
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
