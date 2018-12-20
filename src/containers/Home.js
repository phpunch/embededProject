import React, { Component } from "react";
import { Button, Container, Grid } from "semantic-ui-react";
import Chart from "../components/LineChart";
import Table from "../components/Table";
import Header from "../components/Header";
import PercentageCircle from "../components/PercentageCircle";
import Controller from "../containers/Controller";

class Home extends Component {
  state = {
    isAirConditionOn: false,
    isAirPurifierOn: false,
    humidityThreshold: 0.5,
    dustThreshold: 0.5,
    data: null,
    currentData: null
  };
  componentWillMount() {
    let app = this.props.db.database().ref();
    app.on("value", snapshot => {
      this.getData(snapshot.val());
    });
  }

  getData(values) {
    let dataObj = values.data;
    const switchObj = values.switch;
    let dataArray = [];
    let currentData = null;
    if (dataObj) {
      dataArray = Object.keys(dataObj).map(key => {
        return {
          humidity: dataObj[key].humidity,
          dust: dataObj[key].dust,
          temperature: dataObj[key].temperature
        };
      });
      const size = dataArray.length;
      currentData = dataArray[size - 1];
      if (size > 12) {
        dataArray = dataArray.slice(size - 12, size);
      }
    } else {
      dataArray = [];
    }
    this.setState({
      data: dataArray,
      isAirConditionOn: switchObj.airCondition,
      isAirPurifierOn: switchObj.airPurifier,
      currentData: currentData
    });
  }

  request = () => {
    const req = {
      humidity: Math.random(),
      dust: Math.random(),
      temperature: Math.random()
    };
    const dbCon = this.props.db.database().ref("/data");
    dbCon.push(req);
  };

  turnOffAirConditionHandler = () => {
    const dbCon = this.props.db.database().ref("/switch");
    dbCon.update({
      airCondition: false
    });
  };

  turnOnAirConditionHandler = () => {
    const dbCon = this.props.db.database().ref("/switch");
    dbCon.update({
      airCondition: true
    });
  };

  turnOffAirPurifierHandler = () => {
    const dbCon = this.props.db.database().ref("/switch");
    dbCon.update({
      airPurifier: false
    });
  };

  turnOnAirPurifierHandler = () => {
    const dbCon = this.props.db.database().ref("/switch");
    dbCon.update({
      airPurifier: true
    });
  };

  deleteDataHandler = () => {
    const dbCon = this.props.db.database().ref("/data");
    dbCon
      .remove()
      .then(console.log("Removed Data"))
      .catch(err => console.log(err));
  };

  render() {
    let deleteButton = <Button disabled>Delete Data</Button>;
    let humidityCircle = (
      <PercentageCircle
        name="Humidity"
        percentage={0}
        threshold={this.state.humidityThreshold}
      />
    );
    let dustCircle = (
      <PercentageCircle
        name="Dust Density"
        percentage={0}
        threshold={this.state.humidityThreshold}
      />
    );
    let controller = (
      <Controller
        airConditionChecked={this.state.isAirConditionOn}
        airConditionOnFunction={this.turnOnAirConditionHandler}
        airConditionOffFunction={this.turnOffAirConditionHandler}
        airPurifierChecked={this.state.isAirPurifierOn}
        airPurifierOnFunction={this.turnOnAirPurifierHandler}
        airPurifierOffFunction={this.turnOffAirPurifierHandler}
      />
    );
    if (this.state.currentData) {
      deleteButton = (
        <Button onClick={this.deleteDataHandler}>Delete Data</Button>
      );
      humidityCircle = (
        <PercentageCircle
          name="Humidity"
          percentage={this.state.currentData.humidity}
          threshold={this.state.humidityThreshold}
        />
      );
      dustCircle = (
        <PercentageCircle
          name="Dust Density"
          percentage={this.state.currentData.dust}
          threshold={this.state.dustThreshold}
        />
      );
      controller = (
        <Controller
          airConditionChecked={this.state.isAirConditionOn}
          airConditionOnFunction={this.turnOnAirConditionHandler}
          airConditionOffFunction={this.turnOffAirConditionHandler}
          airPurifierChecked={this.state.isAirPurifierOn}
          airPurifierOnFunction={this.turnOnAirPurifierHandler}
          airPurifierOffFunction={this.turnOffAirPurifierHandler}
        />
      );
    }
    return (
      <div>
        <Container style={{ margin: "3em" }}>
          <Header />
        </Container>
        <Grid>
          <Grid.Row>
            <Grid.Column width={2} />
            <Grid.Column width={2}>{humidityCircle}</Grid.Column>
            <Grid.Column width={2}>{dustCircle}</Grid.Column>
            <Grid.Column width={1} />
            <Grid.Column width={9}>{controller}</Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Button onClick={this.request}>Simulate data</Button>
            {deleteButton}
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={8}>
              <Chart
                stroke="#8884d8"
                data={this.state.data}
                dataKey="humidity"
                isAnimationActive={false}
              />
            </Grid.Column>
            <Grid.Column width={8}>
              <Chart
                stroke="#82ca9d"
                data={this.state.data}
                dataKey="dust"
                isAnimationActive={false}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Container style={{ margin: "2em" }}>
          <Table data={this.state.data} />
        </Container>
      </div>
    );
  }
}

export default Home;
