import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useModal } from '../context/ModalContext';

/* 
  An overlay modal with content and a close button.
*/

const Modal: React.FunctionComponent = () => {
  const { dispatch, showModal, content } = useModal();
  const nodeRef = useRef(null);
  const contentRef = useRef(null);

  const close = () => {
    dispatch({ type: 'close' });
  };
  const clear = () => {
    dispatch({ type: 'clear' });
  };
  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={showModal}
      timeout={300}
      classNames="fade"
      onExited={clear}
      unmountOnExit
    >
      <div ref={nodeRef} className="mdfy-modal" onClick={close}>
        <div ref={contentRef} className="mdfy-modal-content">
          {content}
        </div>
      </div>
    </CSSTransition>
  );
};

export default Modal;
