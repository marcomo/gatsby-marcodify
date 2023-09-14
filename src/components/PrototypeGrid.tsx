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
      xlcolumns={2}
      lgrows={Math.ceil(props.prototypes.length / 2)}
      lgcolumns={2}
      lgColGaps={4}
      lgRowGaps={4}
      xlrows={Math.ceil(props.prototypes.length / 2)}
      mdRowGaps={4}
      smrows={2}
      smcolumns={1}
      className="mb-8"
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
