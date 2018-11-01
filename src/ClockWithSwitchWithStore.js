import React from 'react';
import Clock from './Clock';
import Timer from './Timer';
import store from './redux/store';
import { toggleCheckbox } from './redux/actions';

import ReactDOM from 'react-dom';

//React.createPortal 可以將component 另外 render到另一個root上 製造一種彈跳視窗的效果

class ClockWithSwitchWithStore extends React.Component{
    
    unsubscribe = null;

    state = {
        checked: store.getState().checkbox.checked,
    }

    componentDidMount(){
        this.unsubscribe = store.subscribe(() => {
            const state = store.getState();
            const checkbox = state.checkbox;
            const checked = checkbox.checked;

            this.setState({
                checked
            })
        })
    }

    componentWillUnmount(){
        this.unsubscribe();
    }

    handleChange = () =>{
        const isChecked = this.state.checked;
        store.dispatch(toggleCheckbox(!isChecked));
    }

    render(){
        return(
            <div>
                <input type ="checkbox" checked={this.state.checked} onChange={this.handleChange}></input>
                {this.state.checked? ReactDOM.createPortal(<Clock />, document.querySelector('#clock-root') ): null }
                {this.state.checked? <Timer />: null}
            </div>
        );
    }
}

export default ClockWithSwitchWithStore;