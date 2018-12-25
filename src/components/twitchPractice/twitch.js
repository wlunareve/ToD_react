import React, { Component } from 'react';
import TwitchBox from './twich_box';


class Twitch extends Component{
    render(){
        return(
            <div className="twitch_container">
                <div className="twitch_row">
                    <TwitchBox></TwitchBox>
                    <TwitchBox></TwitchBox>
                    <TwitchBox></TwitchBox>
                    <TwitchBox></TwitchBox>
                    <TwitchBox></TwitchBox>
                    <TwitchBox></TwitchBox>
                    <TwitchBox></TwitchBox>
                    <TwitchBox></TwitchBox>
                    <TwitchBox></TwitchBox>
                    <div className="twitch_col"></div>
                    <div className="twitch_col"></div>
                </div>
            </div>
        );
    }
}

export default Twitch
