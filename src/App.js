import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import JokeList from "./JokeList";

class App extends Component{
  render(){
    return(
      <div className="App">
        <JokeList />
      </div>
    )
  }
}


export default App;
