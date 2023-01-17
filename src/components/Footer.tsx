import { Link } from 'gatsby';
import React from 'react';
import ExternalLink from './ExternalLink';
import * as styles from './footer.module.scss';

const Footer: React.FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      ©2023 Marco Morales
      <ExternalLink href="https://www.linkedin.com/in/marcodify">
        <i className={styles.linkedin + ' fa-brands fa-linkedin'}></i>
      </ExternalLink>
    </footer>
  );
};

export default Footer;
