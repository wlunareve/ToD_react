import React from 'react';
import './Button.css'

class Button extends React.Component{
    
    /* 
    handleClick = (e) =>{
        // e.target 會取得 dom 物件
        window.alert(e.target.textContent)
    }
    */
    handleClick = () =>{
        // e.target 會取得 dom 物件
        window.alert(this.props.text)
    }
    
    render(){
        return(
            <button onClick={this.handleClick}>{this.props.text}</button>
        );
    }
}

export default Button