import React, { Component } from 'react';
import SayHello from './components/SayHello';
import Border from './components/Border';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Yupapron Chaiwut",
      age : 21
      
    };
  }

  incrementAge(){
    this.setState({age: this.state.age + 1 });
  }

  decrementAge(){
    this.setState({age: this.state.age - 1 });
  }

  render() {
    return <div className="App">
    <SayHello name={this.state.name} age={this.state.age} />
    <p>Age : {this.state.age}</p>
    <div
         style={{
           width: this.state.age,
           border: 2,
           borderStyle: "solid",
           color: "#deab53"
         }}
    />
    <Border>
      <button onClick={() => this.decrementAge()}>ลดอายุ</button>{" "}
      <button onClick={() => this.incrementAge()}>เพิ่มอายุ</button>
    </Border>
    </div>;
  } 
}

export default App;
