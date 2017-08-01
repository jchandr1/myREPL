import React from 'react';
import axios from 'axios';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      code: '',
      console: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    // axios.post('/compile', { code:this.state.code });
    var obj = {};
    var context = this;
    obj.fn = function () {
      var log = console.log;
      var results = '';
      console.log = function () {
        if (results !== "undefined") {
          results += Array.prototype.slice.call(arguments) + '\n';
        }
        context.setState({ console:results });
      };
    }();
    var fn = new String(obj.fn);
    var result = '';
    for (var i in fn) {
      result += fn[i];
    }
    try {
      eval(result + '\n' + this.state.code);
    }
    catch (e) {
      this.setState({ console:e });
    }
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({ code: event.target.value });
  }

  render() {
    return (
      <div>
        The Best REPL Ever Created<br />
        <form onSubmit={this.handleSubmit}>
          <textarea rows="50" cols="75" onChange={this.handleChange} value={this.state.code}></textarea>
          <textarea rows="50" cols="75" value={this.state.console} ></textarea>           
          <br />
          <input type="submit" value="Compile" style={{height:100, width:100}} />
          <input type="submit" value="Save(not yet)" style={{height:100, width:100}} />
        </form>
      </div>
    );
  }
}