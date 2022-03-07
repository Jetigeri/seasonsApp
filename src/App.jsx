import logo from "./logo.svg";
import "./App.css";
import SeasonDisplay from "./components/SeasonsDisplay";
import React from "react";
import Spinner from "./components/Spinner";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  componentDidUpdate() {
    console.log("My component was just updated geci");
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage} </div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat}></SeasonDisplay>;
    }

    return <Spinner message="Please accept location request"></Spinner>;
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>
  }
}

export default App;
