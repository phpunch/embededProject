import React from "react";
import { Grid, Table, Loader } from "semantic-ui-react";

const table = props => {
  let arr = props.data;

  let table = <Loader size="massive" active inline='centered' />
  
  if (arr) {
    arr = arr.reverse();
    let rows = []
    for(var i = 0;i<12;i++) {
      rows.push(<Table.Row>
        <Table.Cell>{arr[i] ? arr[i].humidity : <p>?</p>}</Table.Cell>
        <Table.Cell>{arr[i] ? arr[i].dust : <p>?</p>}</Table.Cell>
        <Table.Cell>{arr[i] ? arr[i].temperature : <p>?</p>}</Table.Cell>
      </Table.Row>)
    }
    table = (
      <Grid.Column>
        <Table attached="bottom" celled>
          <Table.Header>
            <Table.HeaderCell>Humidity</Table.HeaderCell>
            <Table.HeaderCell>Dust Density</Table.HeaderCell>
            <Table.HeaderCell>Temperature</Table.HeaderCell>
          </Table.Header>
          <Table.Body>
            {rows}
          </Table.Body>
        </Table>
      </Grid.Column>
    );
  }
  return <div>{table}</div>;
};

export default table;
