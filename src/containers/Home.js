import React, { Component } from "react";
import { Header, Icon, Image, Button, Container } from "semantic-ui-react";
import Chart from '../components/LineChart'
import CurrentData from '../components/CurrentData'

class Home extends Component {
  state = {
    isOn: false,
    data: null,
    currentData : null
  };
  componentWillMount() {
    let app = this.props.db.database().ref();
    app.on("value", snapshot => {
      this.getData(snapshot.val());
    });
  }

  getData(values) {
    let obj = values;
    //console.log(obj)
    let x = Object.keys(obj).map(key => {
      return {
        humidity: obj[key].humidity,
        dust: obj[key].dust
      };
    });
    //console.log(x)
    const size = x.length;
    const currentData = x[size-2]
    x = x.slice(size - 13, size-1);
    
    //console.log(x);
    this.setState({
      data: x,
      isOn: obj.switch.isOn,
      currentData: currentData
    });
  }

  request = () => {
    const req = {
      humidity: Math.random(),
      dust: Math.random()
    };
    let dbCon = this.props.db.database().ref("/");
    dbCon.push(req);
  };

  turnOffHandler = () => {
    let dbCon = this.props.db.database().ref("/switch");
    dbCon.set({
      isOn: false
    });
  };

  turnOnHandler = () => {
    let dbCon = this.props.db.database().ref("/switch");
    dbCon.set({
      isOn: true
    });
  };

  render() {
    let switchButton = <Button onClick={this.turnOnHandler}>Turn On</Button>;
    if (this.state.isOn) {
      switchButton = <Button onClick={this.turnOffHandler}>Turn Off</Button>;
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
    let currentData = <div>loading</div>
    if (this.state.currentData) {
      currentData = <CurrentData humidity={this.state.currentData.humidity} dust={this.state.currentData.dust}/>
    }
    return (
      <Container>
        <Header as="h2" icon textAlign="center">
          <Icon name="wifi" circular />
          <Header.Content>Smart Clean Air</Header.Content>
        </Header>
        <Image
          centered
          size="small"
          src="https://image.flaticon.com/icons/svg/112/112516.svg"
        />
        {currentData}
        {switchButton}
        <Button onClick={this.request}>Simulate data</Button>
        <Chart stroke="#8884d8" data={this.state.data} dataKey="humidity" isAnimationActive={false} />
        <Chart stroke="#82ca9d" data={this.state.data} dataKey="dust" isAnimationActive={false} />

        {showData}
      </Container>
    );
  }
}

export default Home;
