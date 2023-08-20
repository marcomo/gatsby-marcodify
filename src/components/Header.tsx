import { Link, graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Media from 'react-media';
import * as styles from './header.module.scss';

const Header: React.FunctionComponent = () => {
  // Get all markdown pages, title and slug
  const data = useStaticQuery<Queries.NavLinksQuery>(graphql`
      query NavLinks {
        site {
          siteMetadata {
            navLinks {
              name
              link
              publish
            }
          }
        }
      }
  `)

  const links = data?.site?.siteMetadata?.navLinks ?? [];
  const hasLinks = (links).filter(link => link.publish).length > 0
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
          {
            hasLinks ?
              <ul className={styles.ul}>
                {
                  links.map((link, idx) => (
                    link.publish ?
                      <li key={`link-${link.name}-${idx}`}>
                        <Link to={link.link} activeClassName={styles.liActive}>
                          {link.name}
                        </Link>
                      </li>
                      : null
                  ))
                }
              </ul>
              : null
          }
        </div>
      </nav>
    </header>
  );
};

export default Header;
