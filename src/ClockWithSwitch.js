import React from 'react';
import Clock from './Clock';
import Timer from './Timer';

import ReactDOM from 'react-dom';

//React.createPortal 可以將component 另外 render到另一個root上 製造一種彈跳視窗的效果

class ClockWithSwitch extends React.Component{
    state = {
        checked: false
    }

    handleChange = () =>{
        const isChecked = this.state.checked;

        this.setState({
            checked: !isChecked
        })

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

export default ClockWithSwitch;