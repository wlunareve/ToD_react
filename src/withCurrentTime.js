import React from 'react';

// HOC Higher Order Component 是一種 Functional Component 
// 特徵是 輸入一個 Component 輸出一個 Component 

// 使用時機: 當有兩個以上的 component 生命週期做的事情相同時
// 

function withCurrentTime(WrappedComponent){
    return class extends React.Component{

        state = {
            currentTime: new Date()
        }
    
        componentDidMount(){
            this.interval = setInterval(() => {
                this.setState({
                    currentTime: new Date()
                })
            }, 1000);
        }

        componentWillUnmount(){
            clearInterval(this.interval);
        }

        render(){
            return(<WrappedComponent currentTime={this.state.currentTime}/>);
        }
    }
}

export default withCurrentTime;