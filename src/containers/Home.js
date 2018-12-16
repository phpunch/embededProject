import React, { Component } from "react";
import { Button, Container } from "semantic-ui-react";
import Chart from "../components/LineChart";
import CurrentData from "../components/CurrentData";
import Table from "../components/Table";
import Header from '../components/Header';

class Home extends Component {
  state = {
    isAirConditionOn: false,
    isAirPurifierOn: false,
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
    //console.log(obj)
    let dataArray = []
    let currentData = null
    if (dataObj) {
      dataArray = Object.keys(dataObj).map(key => {
        return {
          humidity: dataObj[key].humidity,
          dust: dataObj[key].dust
        };
      });
      //console.log(x)
      const size = dataArray.length;
      currentData = dataArray[size - 1];
      dataArray = dataArray.slice(size - 12, size);
    } else {
      dataArray = []
    }

    //console.log(x);
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
      dust: Math.random()
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

  render() {
    let switchAirConditionButton = (
      <Button onClick={this.turnOnAirConditionHandler}>
        Turn Air Condition On
      </Button>
    );
    if (this.state.isAirConditionOn) {
      switchAirConditionButton = (
        <Button onClick={this.turnOffAirConditionHandler}>
          Turn Air Condition Off
        </Button>
      );
    }
    let switchAirPurifierButton = (
      <Button onClick={this.turnOnAirPurifierHandler}>
        Turn Air Purifier On
      </Button>
    );
    if (this.state.isAirPurifierOn) {
      switchAirPurifierButton = (
        <Button onClick={this.turnOffAirPurifierHandler}>
          Turn Air Purifier Off
        </Button>
      );
    }
    let showData = <div>Loading</div>;
    if (this.state.data) {
      showData = this.state.data.map(obj => {
        return Object.keys(obj).map(key => {
          return (
            <div key={obj + key}>
              {key} : {obj[key]}
            </div>
          );
        });
      });
    }
    let currentData = <div>loading</div>;
    if (this.state.currentData) {
      currentData = (
        <CurrentData
          humidity={this.state.currentData.humidity}
          dust={this.state.currentData.dust}
        />
      );
    }
    return (
      <Container>
        <Header />
        {currentData}
        Air Condition : {this.state.isAirConditionOn ? <p>On</p> : <p>Off</p>}
        Air Purifier : {this.state.isAirPurifierOn ? <p>On</p> : <p>Off</p>}
        {switchAirConditionButton}
        {switchAirPurifierButton}
        <Button onClick={this.request}>Simulate data</Button>
        <Chart
          stroke="#8884d8"
          data={this.state.data}
          dataKey="humidity"
          isAnimationActive={false}
        />
        <Chart
          stroke="#82ca9d"
          data={this.state.data}
          dataKey="dust"
          isAnimationActive={false}
        />
        <Table data={this.state.data} />
        {showData}
      </Container>
    );
  }
}

export default Home;
