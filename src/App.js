import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import Example from './Example';

/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
*/

class Home extends Component{
  render(){
    return(
      <div>
        <h1>React Router Tutorial</h1>
        <Example text={'React'} />
        <Example text={'text:{}當作傳入component中的props變數'}/>
        <Example text={'test: this.props.text'} />
        <ul>
          <li><Link to="/" activeClassName="active">Home</Link></li>
          <li><Link to="/about" activeStyle={{ color: 'green' }}>About</Link></li>
          <li><Link to="/user" activeClassName="active">User</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}



export default Home;
