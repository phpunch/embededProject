import React from "react";
import { Grid, Card } from "semantic-ui-react";

const currentData = props => {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={8}>
          <Card header="Humidity" description={props.humidity} />
        </Grid.Column>
        <Grid.Column width={8}>
          <Card header="Dust" description={props.dust} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default currentData;
