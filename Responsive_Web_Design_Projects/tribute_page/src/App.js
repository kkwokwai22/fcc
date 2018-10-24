import React, { Component } from "react";
import Norman_Description from "./components/Norman_Description";
import TimeLine from "./components/TimeLine";
import LastDescription from "./components/Last_Description";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Dr. Norman Borlaug</h1>
        <h3>The man who saved a billion lives</h3>
        <Norman_Description />
        <TimeLine />
        <LastDescription />
      </div>
    );
  }
}

export default App;
