import React, { PropsWithChildren } from 'react';
import { ModalProvider } from '../context/ModalContext';

const GlobalProvider: React.FunctionComponent<PropsWithChildren> = (props) => {
  return <ModalProvider>{props.children}</ModalProvider>;
};

export default GlobalProvider;
