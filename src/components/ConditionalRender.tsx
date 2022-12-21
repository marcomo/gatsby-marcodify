import React, { PropsWithChildren, ReactNode, ComponentType } from 'react';

interface IProps {
  shouldRender: boolean
  elseRender?: ReactNode
}

const ConditionalRender: React.FunctionComponent<PropsWithChildren<IProps>> = (props) => {
  return (
    <React.Fragment>
      {
        props.shouldRender
        ? props.children
        : props.elseRender
        ||
        null
      }
    </React.Fragment>
  );
};

export const conditionalRenderFunc = <P,>(shouldRender: boolean, Component: ComponentType<P>, props: PropsWithChildren<P>) => {
  return <Component {...props} />
}

export default ConditionalRender;