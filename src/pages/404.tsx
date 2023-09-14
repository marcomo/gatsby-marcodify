import { Link } from 'gatsby';
import React from 'react';

const Missing = () => {
  return (
    <div className="mt-8 pt-8">
      <h1>Oops. Probably not what you expected.</h1>
      <article>
        <h2 className="h2">
          Let&lsquo;s get you back to the{' '}
          <button type="button" className="btn-pill">
            <Link to="/" className="no-underline">
              Homepage
            </Link>
          </button>
        </h2>
      </article>
    </div>
  );
};

export default Missing;
