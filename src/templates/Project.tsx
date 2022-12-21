import { faLongArrowRight } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { PageProps } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { project, contentText } from './project.module.scss';
import FeaturedImage from '../components/FeaturedImage';
import ProvidedLayout from '../components/ProvidedLayout';

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
      <header className="grid-1-1">
        <div className="gridarea-1 pr-8 m-auto">
          <h1>{frontmatter?.h1}</h1>
          <p>{frontmatter?.description}</p>
        </div>
        <div className="grid-2">{featuredImgNode}</div>
      </header>
      <article>{props.children}</article>
      <FontAwesomeIcon icon={faLongArrowRight} />
    </section>
  );
};

const Project: React.FunctionComponent<PageProps<PropsType, ContextType>> = (
  props
) => {
  return (
    <ProvidedLayout
      components={{
        p: (props) => <p className={contentText}>{props.children}</p>,
      }}
    >
      <ProjectSection {...props} />
    </ProvidedLayout>
  );
};

export default Project;
