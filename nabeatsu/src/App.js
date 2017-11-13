import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import ClassNames from 'classnames';

const styles = {
  normal: {
  },
  baisu: {
    backgroundColor: 'red',
  }
};

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
      <div className="block">
        <div className="display" style={this.getIsSan()}>{this.state.count}</div>
        <div className="button">
        <button className="btn btnPlus" onClick={this.handleClicks.bind(this)}>+</button>
        <button className="btn btnMinus"onClick={this.handleClick.bind(this)}>-</button>
        </div>
      </div>
    )
  }

  getIsSan() {
    return this.state.count % 3 === 0 && this.state.count !== 0 ? styles.baisu : styles.normal ;
  }





  
}

export default App;
