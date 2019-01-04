import React, { Component } from 'react'

class TwitchBox extends Component{

    handleImageLoaded(){
        for(let img of document.querySelectorAll('#img')){
            img.style.opacity=1
        }
    }

    render(){
        return(
            <div className="twitch_col">
                <div className="preview">
                    <div className="placeholder">
                    </div>
                    <a href={this.props.link}>
                    <img id='img' src={this.props.preview} alt="我是圖片" onLoad={this.handleImageLoaded}></img>
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