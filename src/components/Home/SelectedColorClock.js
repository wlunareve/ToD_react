import React from 'react';
//import ClockWithSwitch from './ClockWithSwitch';
import ClockWithSwitchContainer from './ClockWithSwitchContainer';
// 應用 react-redux 的方式
import ClockWithSwitch from './ClockWithSwitch/ClockWithSwitchConatiner';
import Select from './Select';

const options = [{ 
    value: 'red',
    text: '紅色',
  },  {
    value: 'green',
    text: '綠色',
  }, {
    value: 'blue',
    text: '藍色',
  }, {
    value: 'purple',
    text: '紫色',
  }
]

export const Context = React.createContext();

class SelectedColorClock extends React.Component{
    state = {
        selectValue: 'red'
    }
    
    handleChange = (e) => {
        const selectValue = e.target.value;
        console.log(e.target.value);
        this.setState({
            selectValue,
        })
    }
    render(){
        return(
            <div>
                <Select 
                    handleChange={this.handleChange} 
                    selectValue={this.state.selectValue} 
                    options={options} />
                <Context.Provider value={this.state.selectValue} >
                    <ClockWithSwitch />
                    <ClockWithSwitchContainer />
                </Context.Provider>
            </div>
        );
    }
}

export default SelectedColorClock;