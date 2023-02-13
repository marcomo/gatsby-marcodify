import React from 'react';
import IframeEmbed from './IframeEmbed';
import Grid from './layouts/Grid';

interface IProps {
  id: string;
  prototypes: readonly string[];
}

const PrototypeGrid: React.FunctionComponent<IProps> = (props) => {
  return (
    <Grid
      lgcolumns={2}
      lgrows={Math.ceil(props.prototypes.length / 2)}
      mdcolumns={2}
      mdrows={2}
      smrows={2}
      smcolumns={1}
    >
      {props.prototypes.map((proto, i) => (
        <IframeEmbed
          key={`${props.id}-${i}`}
          classNames={`gridarea-${i + 1}`}
          src={proto}
        />
      ))}
    </Grid>
  );
};

export default PrototypeGrid;
