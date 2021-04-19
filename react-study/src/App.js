import React, { Component } from 'react';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    }
  }

  changeColor=()=>{
    this.setState({color:"blue"});
  }


  render(){
    return (
      <div>
        <h2>my {this.state.brand}</h2>
        <p>
          It is a {this.state.color}
          {this.state.model}
          form {this.state.year}
        </p>
        <button type = "button" onClick = {this.changeColor}>Change Color</button>
      </div>
    )
  }
}

export default App;
