// src/index.js為JavaScritp entry point

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
//import history from './history';
import './index.css';
import Home from './App';
import Form from './Form';
import store from './redux/store';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
        <div>
            <ul>
                <li><Link to ="/Home">Home</Link></li>
                <li><Link to ="/Form">Form</Link></li>
            </ul>
            <Route path="/Home" component={Home}>    
            </Route>
            <Route path="/Form" component={Form}>
            </Route>
        </div>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
);

registerServiceWorker();
