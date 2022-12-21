import React, { PropsWithChildren } from 'react';

const EmbedContainer: React.FunctionComponent<PropsWithChildren> = (props) => {
  return (
    <div className="embed-container">
      {props.children}
    </div>
  );
};

export default EmbedContainer;