import React, { Component } from "react";
import { Card, Image } from "semantic-ui-react";
import CheckBox from "../components/CheckBox";
import AirConditionerImg from "../img/air-conditioner.png";
import AirPurifierImg from '../img/air-purifier.png'

class Controller extends Component {
  render() {
    return (
      <Card.Group>
        <Card >
          <Card.Content header="Air Condition" />
          <Card.Content>
            <Image
              size="tiny"
              src={AirConditionerImg}
              style={{ marginLeft: 20, marginRight: 50 }}
            />
            <CheckBox
              checked={this.props.airConditionChecked}
              onFunction={this.props.airConditionOnFunction}
              offFunction={this.props.airConditionOffFunction}
            />
          </Card.Content>
        </Card>

        <Card >
          <Card.Content header="Air Purifier" />
          <Card.Content>
            <Image
              size="tiny"
              src={AirPurifierImg}
              style={{ marginLeft: 20, marginRight: 50 }}
            />
            <CheckBox
              checked={this.props.airPurifierChecked}
              onFunction={this.props.airPurifierOnFunction}
              offFunction={this.props.airPurifierOffFunction}
            />
          </Card.Content>
        </Card>
      </Card.Group>
    );
  }
}

export default Controller;
