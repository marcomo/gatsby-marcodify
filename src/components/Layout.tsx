import React, { PropsWithChildren } from "react";
import MainNav from "./MainNav";
import SideNav from "./SideNav";

const Layout: React.FunctionComponent<PropsWithChildren> = (props) => {
  return (
    <div id="mdfy-wrapper">
      <header>
        <MainNav />
      </header>
      <main>
        <aside>
          <SideNav />
        </aside>
        {props.children}
      </main>
      <footer>© 2021 Marco Morales</footer>
    </div>
  );
};

export default Layout;
