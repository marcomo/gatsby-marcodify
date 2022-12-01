import { Link } from 'gatsby';
import React from 'react';
import * as mainnav from './mainnav.module.scss'

const MainNav: React.FunctionComponent = () => {
  return (
    <nav className="flex-row">
      <Link to="/" className={mainnav.logoLink}>
        <div className="mdfy-brand-logo" />
      </Link>
      <ul className="flex-row">
        <li className={mainnav.li}>
          <Link to="/projects">
            projects
          </Link>
        </li>
        <li className={mainnav.li}>
          <Link to="/about">
            about
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;