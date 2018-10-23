import React from 'react';

class ClockDate extends React.Component{
    
    componentDidUpdate(){
        console.log('test');
    }
    
    shouldComponentUpdate(prevProps){
        if(prevProps.year === this.props.year && prevProps.month === this.props.month && prevProps.date === this.props.date){
            return false;
        }else{
            return true;
        }
    }

    render(){
        const { year, month, date} =this.props;
        return(
            `${year}年${month}月${date}日`
        )
    }
}

export default ClockDate;