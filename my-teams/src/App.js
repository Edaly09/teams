import React from 'react'
// import logo from './logo.svg';
import './App.css';
import tems from "./tems.json"
import "./App.css"
import Counter from './components/counter.js'

class App extends React.Component {
  constructor() {
    super()

    // state initial
    this.state = {
      count: 0,
      countBis: 1
    }
  }

  // Counter #1
  handleMinusClick = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1
      })
    }
  }

  handlePlusClick = () => {
    if (this.state.count < 9) {
      if (this.state.count === this.state.countBis - 1) {
        this.setState({
          count: this.state.count + 1,
          countBis: this.state.countBis + 1
        })
      } else {
        this.setState({
          count: this.state.count + 1
        })
      }
    }
  }

  // Counter #2
  handleMinusBisClick = () => {
    if (this.state.countBis > 1) {
      if (this.state.countBis - 1 === this.state.count) {
        this.setState({
          count: this.state.count - 1,
          countBis: this.state.countBis - 1
        })
      } else {
        this.setState({
          countBis: this.state.countBis - 1
        })
      }
    }
  }

  handlePlusBisClick = () => {
    if (this.state.countBis < 10) {
      this.setState({
        countBis: this.state.countBis + 1
      })
    }
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <Counter
          count={this.state.count}
          increment={this.handlePlusClick}
          substract={this.handleMinusClick}
        />

        <Counter
          count={this.state.countBis}
          increment={this.handlePlusBisClick}
          substract={this.handleMinusBisClick}
        />
      </div>
    )
  }
}


  export default App;


