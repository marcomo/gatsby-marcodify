import { Link } from 'gatsby';
import React from 'react';
import * as styles from './header.module.scss';

const Header: React.FunctionComponent = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link
          to="/"
          className={styles.mdfySimpleLogo}
          style={{ borderBottom: 'none' }}
        >
          <p>Marco Morales</p>
          <div>UI designer and frontend developer</div>
        </Link>
        <ul className={styles.ul}>
          <li>
            <Link to="/projects" activeClassName={styles.liActive}>
              projects
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
