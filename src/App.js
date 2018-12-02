import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
    this.toggleClass = this.toggleClass.bind(this);
  }
  toggleClass() {
    this.setState({ isOpen: !this.state.isOpen });
  }
  render() {
    const { isOpen } = this.state;
    return (
      <div className="App">
        <div className={isOpen ? "menuOuter" : "hidden"}>
          <div className={isOpen ? "menuInner" : "hidden"}>
            <div className={isOpen ? "menuButtons" : "menuButtonsHidden"}>
              <h1>Test</h1>
              <h2>Test</h2>
              <h3>Test</h3>
            </div>
          </div>
        </div>
        <button onClick={() => this.toggleClass()}>Click</button>
      </div>
    );
  }
}

export default App;
