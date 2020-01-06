import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import axios from "axios";
import { config } from "./config/config";
import FoodList from "./component/FoodList";

const initialState = {
  loading: false,
  resData: {}
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  componentDidMount() {
    axios
      .get(config.url + "/menu/01", {
        headers: {
          Authorization: config.key
        }
      })
      .then(res => {
        const resData = res.data;
        this.setState({ resData: { ...resData }, loading: true });
      })
      .catch(err => {
        console.log(err);
      });
  }

  addToCards = data => {
    console.log(data);
  };
  render() {
    // const {id, name} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h3 style={{ textAlign: "center", paddingTop: "20px" }}>Food Card</h3>
        </header>
        <FoodList data={this.state} addToCards={this.addToCards} />
      </div>
    );
  }
}

export default App;
