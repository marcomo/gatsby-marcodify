import React, { PropsWithChildren } from 'react';

export interface IProps {
  lgrows?: number;
  lgcolumns?: number;
  mdrows?: number;
  mdcolumns?: number;
  smrows?: number;
  smcolumns?: number;
  className?: string;
  isSubGrid?: boolean;
}

const Grid: React.FunctionComponent<PropsWithChildren<IProps>> = (props) => {
  return (
    <div
      className={[
        `lg-grid-${props.lgcolumns}-${props.lgrows}`,
        `md-grid-${props.mdcolumns}-${props.mdrows}`,
        `sm-grid-${props.smcolumns}-${props.smrows}`,
        props.className,
        props.isSubGrid ? 'lg-subgrid md-subgrid' : '',
      ].join(' ')}
    >
      {props.children}
    </div>
  );
};

Grid.defaultProps = {
  lgrows: 1,
  lgcolumns: 1,
  mdrows: 1,
  mdcolumns: 1,
  smrows: 1,
  smcolumns: 1,
  className: '',
};

export default Grid;
