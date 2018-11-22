import React from 'react';
import { Context } from './SelectedColorClock';
import PropTypes from 'prop-types';

// 可以使用 extends React.PureComponent 就可以不用寫 shouldComponentUpdate方法
class ClockDate extends React.Component{
    
    static propTyoes = {
        year: PropTypes.number.isRequired,
        month: PropTypes.number.isRequired,
        date: PropTypes.number.isRequired,
        render: PropTypes.func.isRequired,
    }

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
                    {this.props.render(year, month, date)}
                </div>
                )}
            </Context.Consumer>
        )
    }
}

export default ClockDate;