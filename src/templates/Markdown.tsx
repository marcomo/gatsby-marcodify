import React from 'react';
import { PageProps } from 'gatsby';

type PropsType = Queries.AllMdxPagesQuery['allMdx']['edges'][number];
type ContextType = PropsType['node'];

const Markdown: React.FunctionComponent<PageProps<PropsType, ContextType>> = (
  props
) => {
  return (
    <section style={{ flex: '1 0 80%' }}>
      <header>
        <h1>{props.pageContext.frontmatter.heading}</h1>
      </header>
      <div className="this-is-it">{props.children}</div>
    </section>
  );
};

export default Markdown;
