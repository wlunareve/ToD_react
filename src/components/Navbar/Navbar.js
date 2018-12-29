import React, { Component } from 'react'
import NavbarButton from './NavbarButton'

class Navbar extends Component{
    render(){
        return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a href="/Home" class="navbar-brand">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <NavbarButton route="/Home" name="Home"></NavbarButton>
                    <NavbarButton route="/App" name="App"></NavbarButton>
                    <NavbarButton route="/Reactbasic" name="Reactbasic"></NavbarButton>
                    <NavbarButton route="/Twitch" name="Twitch"></NavbarButton>
                </div>
            </div>
        </nav>
        );
    }
}

export default Navbar;