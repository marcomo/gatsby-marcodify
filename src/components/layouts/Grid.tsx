import React, { PropsWithChildren, Attributes, CSSProperties } from 'react'

export interface IProps extends Attributes {
  xlrows?: number
  xlcolumns?: number
  xlTemplateColumns?: string
  xlTemplateRows?: string
  xlColGaps?: number
  xlRowGaps?: number
  lgrows?: number
  lgcolumns?: number
  lgTemplateColumns?: string
  lgTemplateRows?: string
  lgColGaps?: number
  lgRowGaps?: number
  mdrows?: number
  mdcolumns?: number
  mdTemplateColumns?: string
  mdTemplateRows?: string
  mdColGaps?: number
  mdRowGaps?: number
  smrows?: number
  smcolumns?: number
  smTemplateColumns?: string
  smTemplateRows?: string
  smColGaps?: number
  smRowGaps?: number
  rows?: number
  columns?: number
  templateColumns?: string
  templateRows?: string
  colGaps?: number
  rowGaps?: number
  className?: string
  isSubGrid?: boolean
}

const Grid: React.FunctionComponent<PropsWithChildren<IProps>> = ({
  xlrows,
  xlcolumns,
  xlTemplateRows,
  xlTemplateColumns,
  xlColGaps,
  xlRowGaps,
  lgrows,
  lgcolumns,
  lgTemplateRows,
  lgTemplateColumns,
  lgColGaps,
  lgRowGaps,
  mdrows,
  mdcolumns,
  mdTemplateRows,
  mdTemplateColumns,
  mdColGaps,
  mdRowGaps,
  smrows,
  smcolumns,
  smTemplateRows,
  smTemplateColumns,
  smColGaps,
  smRowGaps,
  rows,
  columns,
  templateRows,
  templateColumns,
  colGaps,
  rowGaps,
  className,
  isSubGrid,
  ...props
}) => {
  return (
    <div
      className={[
        xlcolumns && xlrows && `xl-grid-${xlcolumns}-${xlrows}`,
        lgcolumns && lgrows && `lg-grid-${lgcolumns}-${lgrows}`,
        mdcolumns && mdrows && `md-grid-${mdcolumns}-${mdrows}`,
        smcolumns && smrows && `sm-grid-${smcolumns}-${smrows}`,
        columns && rows && `grid-${columns}-${rows}`,
        className,
        isSubGrid ? 'subgrid' : '',
      ].join(' ')}
      style={
        {
          '--xl-grid-template-rows': xlTemplateRows,
          '--xl-grid-template-columns': xlTemplateColumns,
          '--xl-grid-col-gaps': xlColGaps ? `${xlColGaps}rem` : null,
          '--xl-grid-row-gaps': xlRowGaps ? `${xlRowGaps}rem` : null,
          '--lg-grid-template-rows': lgTemplateRows,
          '--lg-grid-template-columns': lgTemplateColumns,
          '--lg-grid-col-gaps': lgColGaps ? `${lgColGaps}rem` : null,
          '--lg-grid-row-gaps': lgRowGaps ? `${lgRowGaps}rem` : null,
          '--md-grid-template-rows': mdTemplateRows,
          '--md-grid-template-columns': mdTemplateColumns,
          '--md-grid-col-gaps': mdColGaps ? `${mdColGaps}rem` : null,
          '--md-grid-row-gaps': mdRowGaps ? `${mdRowGaps}rem` : null,
          '--sm-grid-template-rows': smTemplateRows,
          '--sm-grid-template-columns': smTemplateColumns,
          '--sm-grid-col-gaps': smColGaps ? `${smColGaps}rem` : null,
          '--sm-grid-row-gaps': smRowGaps ? `${smRowGaps}rem` : null,
          '--grid-template-rows': templateRows,
          '--grid-template-columns': templateColumns,
          '--grid-col-gaps': colGaps ? `${colGaps}rem` : null,
          '--grid-row-gaps': rowGaps ? `${rowGaps}rem` : null,
        } as CSSProperties
      }
      {...props}
    >
      {props.children}
    </div>
  )
}

Grid.defaultProps = {
  rows: 1,
  columns: 1,
  className: '',
}

export default Grid
