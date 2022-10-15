import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  state = {
    array: "",
    realArray: "",
    result: {
      Max: 0,
      Min: 0,
    },
  };
  onInputChange = (event) => {
    this.setState({
      array: event.target.value,
    });
  };
  highAndLow(numbers) {
    return {
      Max: Math.max(...numbers.split(" ")),
      Min: Math.min(...numbers.split(" ")),
    };
  }
  onInputSubmit = (event) => {
    event.preventDefault();
    this.setState({
      result: this.highAndLow(this.state.array),
      realArray: this.state.array,
    });
  };
  render() {
    let { Max } = this.state.result;
    let { Min } = this.state.result;
    let { realArray } = this.state;
    return (
      <section className="wrapper">
        <h1 className="appName">Min&Max</h1>
        <form onSubmit={this.onInputSubmit}>
          <input
            placeholder="Введите числа через пробел"
            className="mainInput"
            onChange={this.onInputChange}
          />
          <button className="submitButton"></button>
        </form>
        <h2 className="result-value result-arr">Array [{realArray} ]</h2>
        <div className="result">
          <h2 className="result-value max">Max:{Max}</h2>
          <h2 className="result-value min">Min:{Min}</h2>
        </div>
      </section>
    );
  }
}
