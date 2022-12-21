import { PageProps } from 'gatsby';
import React from 'react';
import * as styles from '../stylesheets/index.module.scss';
import ProvidedLayout from '../components/ProvidedLayout';

const Index: React.FunctionComponent<PageProps<{ mdx: Queries.Mdx }>> = (
  props
) => {
  return (
    <ProvidedLayout>
      <div className={styles.homepage}>
        {props.data?.mdx?.frontmatter?.h1 ? (
          <h1>{props.data?.mdx?.frontmatter?.h1}</h1>
        ) : null}
        <p>{props.data?.mdx?.frontmatter?.description}</p>
        {props.children}
      </div>
    </ProvidedLayout>
  );
};

export default Index;
