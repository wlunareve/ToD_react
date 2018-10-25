// src/index.js為JavaScritp entry point

import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter as Router, Route} from 'react-router-dom';
//import history from './history';
import './index.css';
//import App from './App';
import Home from './App';
//import About from './App';
//import Users from './App';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
    (
        <Home />
    ),
    document.querySelector('#root')
);

registerServiceWorker();
