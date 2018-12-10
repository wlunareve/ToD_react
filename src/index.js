// src/index.js為JavaScritp entry point

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
//import history from './history';
import './index.css';
import App from './App';
import ReactBasic from './ReactBasic';
import store from './redux/store';
import Navbar from './components/Navbar/Navbar'
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import Nomatch from './NoMatch';

//ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
        <div>
            <Navbar route="/Home" name="Home"></Navbar>

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
