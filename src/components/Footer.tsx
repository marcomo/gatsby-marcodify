import React from 'react';
import ExternalLink from './ExternalLink';
import * as styles from './footer.module.scss';

const Footer: React.FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner + ' flex-item space-between width-control'}>
        ©2023 Marco Morales
        <div className={styles.contact}>
          <div className="flex-row align-center">
            <i className={styles.icon + ' fa-solid fa-envelope mr-1'}></i>
            <span>me @ marcodify dot com</span>
          </div>
          <ExternalLink
            href="https://www.linkedin.com/in/marcodify"
            className="no-underline"
          >
            <i className={styles.icon + ' fa-brands fa-linkedin'}></i>
          </ExternalLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
