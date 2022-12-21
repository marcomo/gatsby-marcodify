import React, { PropsWithChildren } from 'react';
import EmbedContainer from './EmbedContainer';

const FigmaEmbed: React.FunctionComponent<PropsWithChildren<{src: string}>> = (props) => {
  return (
    <EmbedContainer>
      <iframe
        style={{border: "1px solid rgba(0, 0, 0, 0.1)"}}
        width="600"
        height="450"
        src={props.src}
        allowFullScreen
      />
    </EmbedContainer>
  );
};

export default FigmaEmbed;