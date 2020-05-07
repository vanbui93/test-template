import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Component } from 'react'


export default class App extends Component {
constructor(props) {
  super(props);
  this.state ={
    jewel:'',
    stone:''
  }
}

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    var index = this.getSameCount(this.state.stone,this.state.jewel);
    alert('There are ' + index + ' jewel in stones string');
  }

  getSameCount = (stone,jewel) => {
    let count = 0;
    const obj = jewel.split("");
    for(let str of stone){
      let idx = obj.findIndex(s => s === str);
      if(idx >= 0){
        count++;
      }
      
    }
    return count;
  }
  

  render() {  

    return (
      <div className="App">
        <header>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Find a jewel in the stones string
          </p>
          
        </header>
        <div className="row">
          <div className="col-4 mx-auto text-left">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>J - jewels strings</label>
                <input type="input" className="form-control" id="jewels"  name="jewel" onChange={ this.onChange }/>
              </div>
              <div className="form-group">
                <label>S - stones strings</label>
                <input type="input" className="form-control" id="stones" name="stone" onChange={ this.onChange }/>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

