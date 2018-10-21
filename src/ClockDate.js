import React from 'react';

class ClockDate extends React.Component{
    
    componentDidUpdate(){
        console.log('test');
    }
    
    shouldComponentUpdate(prevProps){
        if(prevProps.dateString === this.props.dateString){
            return false;
        }else{
            return true;
        }
    }

    render(){
        return(
            this.props.dateString
        )
    }
}

export default ClockDate;