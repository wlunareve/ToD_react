import React from 'react';
  
class Select extends React.Component{


    render(){
        return(
            <div>
                <select onChange ={this.props.handleChange}>
                    {this.props.options.map(option => {
                        return (
                        <option 
                            value={option.value}
                            checked={this.props.selectValue === option.value}
                            key={option.value}>
                            {option.text}
                        </option>
                    )})}
                </select>
            </div>
        )
    }
}

export default Select;