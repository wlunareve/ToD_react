import React from 'react';

class ControlledForm extends React.Component{
    
    // uncontorlled component 用 ref 操控
    // controlled component 用 state 操作 HTML DOM


    state = {
        displayInput: ''
    }

    handleInputChange = (e) =>{
        const stateValue = e.target.value;
        this.setState({
            displayInput: stateValue
        });
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        window.alert(this.state.displayInput);
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.displayInput} onChange={this.handleInputChange}></input>
                <input type ="submit" value="送出"></input>
                <p>text在OnChange時抓到的文字內容:<span>{this.state.displayInput}</span></p>
            </form>
        );
    }
}

export default ControlledForm;