import React, { PropsWithChildren } from 'react';

interface IProps {
  dtrows?: number;
  dtcolumns?: number;
  mbrows?: number;
  mbcolumns?: number;
  className?: string;
}

const Grid: React.FunctionComponent<PropsWithChildren<IProps>> = (props) => {
  return (
    <div
      className={`dt-grid-${props.dtrows}-${props.dtcolumns} ${props.className} mb-grid-${props.mbrows}-${props.mbcolumns} ${props.className}`}
    >
      {props.children}
    </div>
  );
};

Grid.defaultProps = {
  dtrows: 1,
  dtcolumns: 1,
  mbrows: 1,
  mbcolumns: 1,
  className: '',
};

export default Grid;
