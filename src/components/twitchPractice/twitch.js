import React, { Component } from 'react';
import TwitchBox from './twich_box';

const clientId = 'vl6qhqcyjpx5ehwqvcg2ko2yisc0br';
const limit = 20
const apiUrl = 'https://api.twitch.tv/kraken/streams?client_id=' + clientId + '&language=zh-tw&limit=' + limit;

class Twitch extends Component{
    
    state = {
        stream: [],
    }

    handleTwitchItemsLoad = () => {
        fetch(apiUrl,{
            method: 'GET'
        })
        .then((response) => {
            if (!response.ok) throw new Error(response.statusText)
            return response.json()
        })
        .then((itemList)=>{
            const {streams} = itemList
            this.setState({
                stream: streams
            })
            /*
            for (let stream of streams){
                this.setState({
                    link: stream.channel.url,
                    preview: stream.preview.medium,
                    title: stream.channel.status,
                    name: stream.channel.display_name,
                    logo: stream.channel.logo,
                });
            } 
            */
        })
    }

    componentDidMount() {
        // 元件"已經"載入，所以可以載入資料進來
        this.handleTwitchItemsLoad()
      }
    
    render(){
        return(
            <div className="twitch_container">
                <div className="twitch_row">
                    {this.state.stream.map((stream) => {
                        return <TwitchBox key={stream._id} link={stream.channel.url} preview={stream.preview.medium} title={stream.channel.status} name={stream.channel.display_name} logo={stream.channel.logo}></TwitchBox>
                    })}
                    <div className="twitch_col"></div>
                    <div className="twitch_col"></div>
                </div>
            </div>
        );
    }
}

export default Twitch
