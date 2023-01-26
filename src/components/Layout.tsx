import React, { PropsWithChildren } from 'react';
import Footer from './Footer';
import Header from './Header';
import Modal from './Modal';

const Layout: React.FunctionComponent<PropsWithChildren> = (props) => {
  return (
    <div id="mdfy-wrapper">
      <Modal />
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
