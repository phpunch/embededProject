import React from "react";
import { Grid, Table, Loader } from "semantic-ui-react";

const table = props => {
  let arr = props.data;

  let table = <Loader size="massive" active inline="centered" />;

  if (arr) {
    arr = arr.reverse();
    let rows = [];
    for (var i = 0; i < 12; i++) {
      let tableCell = (
        <Table.Row>
          <Table.Cell>?</Table.Cell>
          <Table.Cell>?</Table.Cell>
          <Table.Cell>?</Table.Cell>
        </Table.Row>
      );
      if (arr[i]) {
        const humidityPercentage = Math.round(arr[i].humidity * 10000) / 100;
        tableCell = (
          <Table.Row>
            <Table.Cell>{humidityPercentage}</Table.Cell>
            <Table.Cell>{arr[i].dust}</Table.Cell>
            <Table.Cell>{arr[i].temperature}</Table.Cell>
          </Table.Row>
        );
      }
      rows.push(tableCell);
    }
    table = (
      <Grid.Column>
        <Table attached="bottom" celled>
          <Table.Header>
            <Table.HeaderCell>Humidity (%)</Table.HeaderCell>
            <Table.HeaderCell>Dust Density (mg/m^3)</Table.HeaderCell>
            <Table.HeaderCell>Temperature (Celsius)</Table.HeaderCell>
          </Table.Header>
          <Table.Body>{rows}</Table.Body>
        </Table>
      </Grid.Column>
    );
  }
  return <div>{table}</div>;
};

export default table;
