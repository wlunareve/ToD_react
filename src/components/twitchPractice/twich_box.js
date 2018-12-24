import React, { Component } from 'react'

class TwitchBox extends Component{
    render(){
        return(
            <div className="twitch_col">
                <div className="preview">
                    <img src="https://static-cdn.jtvnw.net/ttv-static/404_preview-320x180.jpg" alt="我是圖片" ></img>
                </div>
                <div className="twitch_bottom">
                    <div className="avatar">
                        <img src="https://static-cdn.jtvnw.net/jtv-static/404_preview-300x300.png" alt="我是頭貼"></img>
                    </div>
                    <div className="intro">
                        <div className="channel_name">頻道名稱</div>
                        <div className="owner_name">實況主名稱</div>
                    </div>
                </div>
            </div>
);
    }
}
export default TwitchBox;