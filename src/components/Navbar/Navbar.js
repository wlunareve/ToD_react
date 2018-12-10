import React, { Component } from 'react'
import NavbarButton from './NavbarButton';

class Navbar extends Component{
    render(){
        return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <NavbarButton route="/Home" name="Home"></NavbarButton>
                    <NavbarButton route="/App" name="App"></NavbarButton>
                    <NavbarButton route="/Reactbasic" name="Reactbasic"></NavbarButton>
                </div>
            </div>
        </nav>
        );
    }
}

export default Navbar;