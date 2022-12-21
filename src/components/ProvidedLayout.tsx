import { MDXProvider } from '@mdx-js/react';
import { Props } from '@mdx-js/react/lib';
import React, { PropsWithChildren } from 'react';
import Layout from './Layout';
import { ModalProvider } from "../context/ModalContext";

interface IProps {
  components?: Props["components"]
}

const ProvidedLayout: React.FunctionComponent<PropsWithChildren<IProps>> = (props) => {
  return (
    <ModalProvider>
      <MDXProvider components={props.components}>
        <Layout>{props.children}</Layout>
      </MDXProvider>
    </ModalProvider>
  );
};

ProvidedLayout.defaultProps = {
  components: {}
}

export default ProvidedLayout;
