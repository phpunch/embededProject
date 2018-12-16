import React from 'react';
import { Grid, Table } from "semantic-ui-react";

const table = (props) => {
    let arr = props.data
    
    let table = <p>loading</p>
    
    if (arr) {
        arr = arr.reverse()
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
              <Table.Cell>{arr[1] ? arr[1].humidity : <p>?</p>}</Table.Cell>
              <Table.Cell>{arr[1] ? arr[1].dust : <p>?</p>}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>{arr[2] ? arr[2].humidity : <p>?</p>}</Table.Cell>
              <Table.Cell>{arr[2] ? arr[2].dust : <p>?</p>}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>{arr[3] ? arr[3].humidity : <p>?</p>}</Table.Cell>
              <Table.Cell>{arr[3] ? arr[3].dust : <p>?</p>}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>{arr[4] ? arr[4].humidity : <p>?</p>}</Table.Cell>
              <Table.Cell>{arr[4] ? arr[4].dust : <p>?</p>}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>{arr[5] ? arr[5].humidity : <p>?</p>}</Table.Cell>
              <Table.Cell>{arr[5] ? arr[5].dust : <p>?</p>}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>{arr[6] ? arr[6].humidity : <p>?</p>}</Table.Cell>
              <Table.Cell>{arr[6] ? arr[6].dust : <p>?</p>}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>{arr[7] ? arr[7].humidity : <p>?</p>}</Table.Cell>
              <Table.Cell>{arr[7] ? arr[7].dust : <p>?</p>}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>{arr[8] ? arr[8].humidity : <p>?</p>}</Table.Cell>
              <Table.Cell>{arr[8] ? arr[8].dust : <p>?</p>}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>{arr[9] ? arr[9].humidity : <p>?</p>}</Table.Cell>
              <Table.Cell>{arr[9] ? arr[9].dust : <p>?</p>}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>{arr[10] ? arr[10].humidity : <p>?</p>}</Table.Cell>
              <Table.Cell>{arr[10] ? arr[10].dust : <p>?</p>}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>{arr[11] ? arr[11].humidity : <p>?</p>}</Table.Cell>
              <Table.Cell>{arr[11] ? arr[11].dust : <p>?</p>}</Table.Cell>
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