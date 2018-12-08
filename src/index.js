// src/index.js為JavaScritp entry point

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom';
//import history from './history';
import './index.css';
import App from './App';
import ReactBasic from './ReactBasic';
import store from './redux/store';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import Nomatch from './NoMatch';

//ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
        <div class="container-fluid">
            <div class="row">
                <div class="col-2 align--start">
                    <Link to ="/Home" class="btn btn-block btn-info">Home</Link>
                </div>
                <div class="col-2 offset-md-6">
                    <Link to ="/App" class="btn btn-block btn-info">App</Link>
                </div>
                <div class="col-2">
                    <Link to ="/ReactBasic" class="btn btn-block btn-info">ReactBasic</Link>
                </div>
            </div>
            <Switch>
            <Route path="/App" component={App}>    
            </Route>
            <Route path="/ReactBasic" component={ReactBasic}>    
            </Route>
            <Route component={Nomatch}></Route>
            </Switch>
        </div>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
);

registerServiceWorker();
