import React, { PropsWithChildren } from 'react';
import { useModal } from '../context/ModalContext';

interface IProps {
  caption?: string;
  alt: string;
  allowModal?: boolean;
}

const Image: React.FunctionComponent<PropsWithChildren<IProps>> = (props) => {
  const { dispatch } = useModal();

  const openModal = () => {
    dispatch({
      type: 'open',
      content: props.children,
    });
  };

  return (
    <div className="drop-shadow" onClick={props.allowModal && openModal}>
      {props.children}
    </div>
  );
};

export default Image;
