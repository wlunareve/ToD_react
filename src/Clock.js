import React from 'react';
import ClockDate from './ClockDate'

class Clock extends React.Component{
    
    timeRef = React.createRef();
    
    state = {
        time: new Date()
    }

    componentDidMount(){
        this.interval = setInterval(() => {
            this.setState({
                time: new Date()
            })
        }, 1000);
    }
    
    componentDidUpdate(){
        if (this.state.time.getSeconds() %5 === 0){
        this.timeRef.current.style.color = 'red';
        } else{
            this.timeRef.current.style.color = 'black';
        }   
    }
    
    componentWillUnmount(){
        clearInterval(this.interval);
    }

    
    render(){
        const { time } = this.state
        return(
            <div>
                <ClockDate year={time.getFullYear()} month={time.getMonth() + 1} date={time.getDate()}></ClockDate>
                <div ref={this.timeRef} >{this.state.time.toLocaleTimeString()}</div>
            </div>
        );
    }
}

export default Clock;
