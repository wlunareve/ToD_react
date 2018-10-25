import React from 'react';
import { Context } from './SelectedColorClock';

// 可以使用 extends React.PureComponent 就可以不用寫 shouldComponentUpdate方法
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
            <Context.Consumer>
                {value => (
                <div style={{ color: value}}>
                    {`${year}年${month}月${date}日`}
                </div>
                )}
            </Context.Consumer>
        )
    }
}

export default ClockDate;