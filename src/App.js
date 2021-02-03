import React, { Component } from "react";
import JokeList from "./JokeList";
import Footer from './Footer';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <JokeList />
        <Footer/>
      </div>
    );
  }
}

export default App;
