import React from 'react';
import ExternalLink from './ExternalLink';
import * as styles from './footer.module.scss';

const Footer: React.FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      <div className="flex-row flex-item space-between align-center width-control">
        ©2023 Marco Morales
        <ExternalLink href="https://www.linkedin.com/in/marcodify">
          <i className={styles.linkedin + ' fa-brands fa-linkedin'}></i>
        </ExternalLink>
      </div>
    </footer>
  );
};

export default Footer;
