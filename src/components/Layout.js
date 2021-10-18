import React from "react";

const Layout = (props) => {
  return (
    <div id="mdfy-wrapper">
      <header>
        <nav>
          <div id="mdfy-brand-logo">
            <span>mar</span>
            <span>codify</span>
          </div>
        </nav>
      </header>
      <main>{props.children}</main>
      <footer>© 2021 Marco Morales</footer>
    </div>
  );
};

export default Layout;
