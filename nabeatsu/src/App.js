import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

  handleClicks() {
    this.setState({
      count: this.state.count + 1
    })
  }

  handleClick() {
    this.setState({
      count: this.state.count - 1
    })
  }





  render(){
    return(
      <div>
        <div class="display">{this.state.count}</div>
        <button onClick={this.handleClicks.bind(this)}>+</button>
        <button onClick={this.handleClick.bind(this)}>-</button>
      </div>
    )
  }



  
}

export default App;
