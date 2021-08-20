import React, { Component } from 'react'
import Result from './Result';
import Keypad from './Keypad';
import '../index.css';

//App component is where all other components are used
class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       result:"0",
    }
  }

  //to calculate the expression using eval() method
  calculate = () => {
    try {
        this.setState({
            result: eval(this.state.result),
        })
    } catch (err) {
      this.setState({
          result: "error"
      })
    }
  };

  //to change the sign of the value in result
  plusMinus = () => {
    let ans = eval(this.state.result);
    ans*=-1;
    if(ans !== 0){
      this.setState({
        result:ans,
      })
    }
  }

  //to set the result value as 0
  reset = () => {
    this.setState({
      result:"0",
    })
  };

  //to perform the above function s based on the btn pressed
  handleClick = (btn) => {
    if(btn === "C"){
      this.reset();
    }else if(btn === "="){
      this.calculate();
    }else if(btn === "+/-"){
      this.plusMinus();
    }else{
      if(this.state.result == "0"){
        this.setState({
          result:btn,
        })
      }else{
        this.setState({
          result:this.state.result + btn,
        })
      }
    }
  }
  
  //here calling the result and keypad component by passing props
  render() {
    const { result } = this.state;
    return (
      <div className="container">
        <div className="calculator">
          <Result result={result} />
          <Keypad handleClick={this.handleClick} />
        </div>
      </div>
    )
  }
}

export default App;

