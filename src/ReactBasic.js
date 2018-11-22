import React, { Component } from 'react';
import Example from './components/Home/Example';
import Button from './components/Home/Button';
import Form from './components/Home/Form';
import ControlledForm from './components/Home/ControlledForm';
import SelectedColorClock from './components/Home/SelectedColorClock';

class ReactBasic extends Component{
    render(){
      return(
  
        <div className="App">
          <header className="App-header">  
            <Example text={'React'} />
            <Example text={'text:{}當作傳入component中的props變數'}/>
            <Example text={'test: this.props.text'} />
            <Button text={'會被 alert 出來的字'} />
            <Form />
            <ControlledForm />
            <SelectedColorClock />
          </header>
        </div>
      );
    }
  }

export default ReactBasic;