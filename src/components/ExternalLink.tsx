import React, { PropsWithChildren } from 'react';

const ExternalLink: React.FunctionComponent<
  PropsWithChildren<{ href: string }>
> = (props) => {
  return (
    <a href={props.href} rel="nofollow noopener noreferrer" target="_blank">
      {props.children}
    </a>
  );
};

export default ExternalLink;
