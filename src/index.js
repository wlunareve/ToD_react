// src/index.js為JavaScritp entry point

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
//import history from './history';
import './index.css';
import App from './App';
import ReactBasic from './ReactBasic';
import store from './redux/store';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
        <div>
            <ul>
                <li><Link to ="/App">App</Link></li>
                <li><Link to ="/ReactBasic">ReactBasic</Link></li>
            </ul>
            <Route path="/App" component={App}>    
            </Route>
            <Route path="/ReactBasic" component={ReactBasic}>    
            </Route>
        </div>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
);

registerServiceWorker();
