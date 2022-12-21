import React, { PropsWithChildren } from 'react';

interface IProps {
  rows?: number
  columns?: number
  className?: string
}

const Grid: React.FunctionComponent<PropsWithChildren<IProps>> = (props) => {
  return (
    <div className={`grid-${props.rows}-${props.columns} ${props.className}`}>
      {props.children}
    </div>
  );
};

Grid.defaultProps = {
  rows: 1,
  columns: 1,
  className: ""
}

export default Grid;