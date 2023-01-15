import React, { PropsWithChildren } from 'react';
import { useModal } from '../context/ModalContext';

interface IProps {
  caption?: string;
  alt?: string;
  allowModal?: boolean;
  showCaption?: boolean;
  includeShadow?: boolean;
}

const Image: React.FunctionComponent<PropsWithChildren<IProps>> = (props) => {
  const { dispatch } = useModal();

  const figure = (
    <figure>
      {props.children}
      {props.showCaption ? (
        <figcaption>{props.caption || props.alt}</figcaption>
      ) : null}
    </figure>
  );

  const openModal = () => {
    dispatch({
      type: 'open',
      content: figure,
    });
  };

  return (
    <div
      className={props.includeShadow ? 'drop-shadow' : ''}
      onClick={props.allowModal && openModal}
    >
      {figure}
    </div>
  );
};

Image.defaultProps = {
  includeShadow: true,
};

export default Image;
