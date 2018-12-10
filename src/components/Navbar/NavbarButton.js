import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class NavbarButton extends Component{
    render(){
        return(
            <div class="nav-item">
                <Link to ={this.props.route} class="btn btn-block btn-outline-success my-2 mr-sm-2">{this.props.name}</Link>
            </div>
        );
    }
}

export default NavbarButton;