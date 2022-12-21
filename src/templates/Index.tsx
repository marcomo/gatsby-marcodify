import { PageProps } from 'gatsby';
import React from 'react';
import * as styles from '../stylesheets/index.module.scss';

const Index: React.FunctionComponent<PageProps<{ mdx: Queries.Mdx }>> = (
  props
) => {
  return (
    <div className={styles.homepage}>
      {props.data?.mdx?.frontmatter?.h1 ? (
        <h1>{props.data?.mdx?.frontmatter?.h1}</h1>
      ) : null}
      <p>{props.data?.mdx?.frontmatter?.description}</p>
      {props.children}
    </div>
  );
};

export default Index;
