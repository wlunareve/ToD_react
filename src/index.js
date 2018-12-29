// src/index.js為JavaScritp entry point

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
//import history from './history';
//import './index.css';
import './index.scss';
import App from './App';
import ReactBasic from './ReactBasic';
import Twitch from './components/twitchPractice/twitch';
import Navbar from './components/Navbar/Navbar'
import Nomatch from './NoMatch';

import store from './redux/store';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

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
            <Route path="/Twitch" component={Twitch}>    
            </Route>
            <Route component={Nomatch}></Route>
            </Switch>
        </div>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
);

registerServiceWorker();
