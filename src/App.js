import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
var randNum=Math.random(this.state.value);
var num=Math.floor((this.state.value*randNum));
    this.setState({value: num.toString(16)});
    event.preventDefault();
  }

render() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>2nd app</h1>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label for="txtNum">Entrez un nombre ici... (max 13 caractères)</label><br/>
            <textarea value={this.state.value} className="txtNum" maxlength="13"  onChange={this.handleChange}/>
            <br/>
          <input type="submit" value="Envoyer" />
          </form>

        </div>
      </header>
    </div>
  );
}
}


export default App;

