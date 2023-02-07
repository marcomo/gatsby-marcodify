import React, { PropsWithChildren } from 'react';
import EmbedContainer from './EmbedContainer';

interface IProps {
  src: string;
  classNames?: string;
}

const IframeEmbed: React.FunctionComponent<PropsWithChildren<IProps>> = (
  props
) => {
  return props.src ? (
    <EmbedContainer>
      <iframe
        className={props.classNames || ''}
        style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
        width="600"
        height="450"
        src={props.src}
        allow="autoplay; fullscreen"
        allowFullScreen
      />
    </EmbedContainer>
  ) : null;
};

export default IframeEmbed;
