import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class NavbarButton extends Component{
    render(){
        return(
            <div className="nav-item">
                <Link to ={this.props.route} className="btn btn-block btn-outline-success my-2 mr-sm-2">{this.props.name}</Link>
            </div>
        );
    }
}

export default NavbarButton;