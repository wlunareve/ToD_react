import React from 'react';
import Clock from './Clock';
import Timer from './Timer';

import ReactDOM from 'react-dom';

//React.createPortal 可以將component 另外 render到另一個root上 製造一種彈跳視窗的效果
// presentation component 主要處理 外觀部分
// read data from props
// change data  by invoke callbacks from props

class ClockWithSwitchWithStore extends React.Component{

    render(){
        return(
            <div>
                <input type ="checkbox" checked={this.props.checked} onChange={this.props.handleChange}></input>
                {this.props.checked? ReactDOM.createPortal(<Clock />, document.querySelector('#clock-root') ): null }
                {this.props.checked? <Timer />: null}
            </div>
        );
    }
}

export default ClockWithSwitchWithStore;