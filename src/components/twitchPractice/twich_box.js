import React, { Component } from 'react'

class TwitchBox extends Component{
    render(){
        return(
            <div className="twitch_col">
                <div className="preview">
                    <a href={this.props.link}>
                    <img src={this.props.preview} alt="我是圖片"></img>
                    </a>
                </div>
                <div className="twitch_bottom">
                    <div className="avatar">
                        <img src={this.props.logo} alt="我是頭貼"></img>
                    </div>
                    <div className="intro">
                        <div className="channel_name">{this.props.title}</div>
                        <div className="owner_name">{this.props.name}</div>
                    </div>
                </div>
            </div>
);
    }
}
export default TwitchBox;