import React, { Component } from "react";
import Home from "./containers/Home";
import firebase from 'firebase'

class App extends Component {
  constructor(props){
    super(props);
    var config = {
      apiKey: "AIzaSyAqZrsMcMmb93GSpQbjrrCg3585WYWYE0k",
      authDomain: "embededproject-93df5.firebaseapp.com",
      databaseURL: "https://embededproject-93df5.firebaseio.com",
      projectId: "embededproject-93df5",
      storageBucket: "embededproject-93df5.appspot.com",
      messagingSenderId: "863008823567"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <div>
        <Home db={firebase}/>
      </div>
    );
  }
}

export default App;
