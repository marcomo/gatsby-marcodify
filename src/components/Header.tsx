import { Link } from 'gatsby';
import React from 'react';
import Media from 'react-media';
import * as styles from './header.module.scss';

const Header: React.FunctionComponent = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className="width-control flex-row flex-item space-between">
          <Link
            to="/"
            className={styles.mdfySimpleLogo}
            style={{ borderBottom: 'none' }}
          >
            <p>Marco Morales</p>
            <div>
              <Media query={'(max-width: 600px)'}>
                {(matches) =>
                  matches
                    ? 'designer | prototyper | developer'
                    : 'UI designer, prototyper, and developer'
                }
              </Media>
            </div>
          </Link>
          <ul className={styles.ul}>
            <li>
              <Link to="/projects" activeClassName={styles.liActive}>
                projects
              </Link>
            </li>
            <li>
              <Link to="/prototypes" activeClassName={styles.liActive}>
                prototypes
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
