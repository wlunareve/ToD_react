import React from 'react';

class form extends React.Component{
    
    // uncontorlled component 用 ref 操控
    // controlled component 用 state 操作 HTML DOM

    inputRef = React.createRef();

    state = {
        displayInput: ''
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        const value = this.inputRef.current.value;
        this.setState({
            displayInput: value
        })
    }
    
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" ref={this.inputRef}></input>
                <input type ="submit" value="送出"></input>
                <p>text 在submit時由ref轉出放進state來output出文字內容:<span>{this.state.displayInput}</span></p>
            </form>
        );
    }
}

export default form;