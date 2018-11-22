import React from 'react';
import './Button.css'

class Button extends React.Component{
    

    /* 
    handleClick = (e) =>{
        // e.target 會取得 dom 物件
        window.alert(e.target.textContent)
    }
    */
    
    // Imperative 命令式 怎麼處理 e.g 透過 ref 操作 DOM元素
    // Declarative 宣告式 怎麼顯示 e.g 透過 state 渲染畫面
    
    /*
    state 是一個物件 可以有多組 key value 
    state 改變時會自動重新渲染畫面
    */
  
    spanRef = React.createRef();
    
    state = {
        clickCount: 0
        }
    
    handleClick = () =>{
        // e.target 會取得 dom 物件
        this.spanRef.current.textContent = Number(this.spanRef.current.textContent) +1;
        
        const oldClickCount = this.state.clickCount
        this.setState({
            clickCount: oldClickCount + 1
        });
    }

    render(){
        return(
            <div>
            <button onClick={this.handleClick}>{this.props.text}</button>
            <p>ref 被點擊了<span ref={this.spanRef}>0</span>次</p>
            <p>state 被點擊了<span>{this.state.clickCount}</span>次</p>
            </div>
        );
    }
}

export default Button