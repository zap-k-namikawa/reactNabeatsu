import React, { Component } from 'react';
import './App.css';


const baisu = 'http://placehold.jp/3d4070/ffffff/200x200.png?text=%E3%81%AA%E3%81%B9%E3%81%82%E3%81%A4';


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
        <div className="display"><img src={this.getIsSan()} alt=""/>{this.state.count}</div>
        <div className="button">
        <button className="btn btnPlus" onClick={this.handleClicks.bind(this)}>+</button>
        <button className="btn btnMinus"onClick={this.handleClick.bind(this)}>-</button>
        </div>
      </div>
    )
  }

  getIsSan() {
    return this.state.count % 3 === 0 && this.state.count !== 0 ? baisu : null ;
  }





  
}

export default App;
