import React from 'react';
import { Grid, Table } from "semantic-ui-react";

const table = (props) => {
    const arr = props.data
    let table = <p>loading</p>
    
    if (arr) {
        table = (
        <Grid.Column>
        <Table attached='bottom' celled>
          <Table.Header>
            <Table.HeaderCell>Humidity</Table.HeaderCell>
            <Table.HeaderCell>Dust Density</Table.HeaderCell>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>{arr[0] ? arr[0].humidity : <p>?</p>}</Table.Cell>
              <Table.Cell>{arr[0] ? arr[0].dust : <p>?</p>}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Grid.Column>)
    }
    return (
        <div>
            {table}
        </div>
    )
}

export default table;