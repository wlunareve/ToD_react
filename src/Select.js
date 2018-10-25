import React from 'react';

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

  
  class Select extends React.Component{

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
            <select onChange ={this.handleChange}>
            {options.map(option => {
                return (
                <option 
                    value={option.value}
                    checked={this.state.selectValue ===option.value}
                    key={option.value}>
                    {option.text}
                </option>
            )})}
            </select>
        )
    }
}

export default Select;