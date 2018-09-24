import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Switch from './components/Switch/Switch';
import PushButton from './components/PushButton/PushButton';
import Checkbox from './components/Checkbox/Checkbox';
import Textbox from './components/Textbox/Textbox';

import cbIcon from './cbIcon.svg';
import cbIcon2 from './cbIcon2.svg';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Cupertino</h1>
        </header>

        <div className="left-div">
          <Switch /><br /><br />
          <Switch size="small"
            colorUnchecked="red"
            colorChecked="blue" checked /> <br /><br />
          <Switch size="large"
            colorChecked="orange" /><br /><br />

          <PushButton title="Submit"
            color="orange" style={{ fontFamily: '"Comic Sans MS", cursive, sans-serif' }} /><br /><br />

          <PushButton title="Submit"
            color="purple"
            size="small"
          /><br /><br />

          <PushButton title="Submit"
            color="pink"
            size="large"
            style={{ fontSize: "35px" }} /> <br /> <br />



        </div>
        <div className="right-div">
          <Checkbox size="medium"
            icon={cbIcon} />

          <br />

          <Checkbox size="large"
            icon={cbIcon2}
            colorChecked="green"
            colorUnchecked="yellow" />

          <br />

          <Checkbox size="small"
            icon={cbIcon}
            colorChecked="red"
            checked
            colorUnchecked="orange" />
          <br /><br />
          <Textbox label="Name" />


        </div>
        <br />
        <br /><br /><br /><br /><br /><br />
        <br /><br />

      </div>
    );
  }
}

export default App;