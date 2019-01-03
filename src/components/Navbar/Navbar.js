import React, { Component } from 'react'
import NavbarButton from './NavbarButton'

class Navbar extends Component{
    render(){
        return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a href="/Home" className="navbar-brand">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
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