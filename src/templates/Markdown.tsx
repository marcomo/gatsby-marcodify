import React from 'react';
import { PageProps } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowRight } from '@fortawesome/pro-light-svg-icons';
import ProvidedLayout from '../components/ProvidedLayout';

type PropsType = Queries.AllMdxPagesQuery['allMdx']['edges'][number];
type ContextType = PropsType['node'];

const Markdown: React.FunctionComponent<PageProps<PropsType, ContextType>> = (
  props
) => {
  return (
    <ProvidedLayout>
      <section style={{ flex: '1 0 80%' }}>
        <header>
          <h1>{props.pageContext.frontmatter?.h1}</h1>
        </header>
        <div className="this-is-it">{props.children}</div>
        <FontAwesomeIcon icon={faLongArrowRight} />
      </section>
    </ProvidedLayout>
  );
};

export default Markdown;
