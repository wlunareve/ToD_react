import React, { Component } from 'react';
import TwitchBox from './twich_box';

const clientId = 'vl6qhqcyjpx5ehwqvcg2ko2yisc0br'
const client_id = '&client_id=' + clientId
const limit = 20
let isLoading = false
let apiUrl = 'https://api.twitch.tv/kraken/streams?language=zh-tw&limit=' + limit + client_id

class Twitch extends Component{
    
    state = {
        _links: [],
        stream: [],
    }

    handleTwitchItemsLoad = () => {
        isLoading = true
        fetch(apiUrl,{
            method: 'GET'
        })
        .then((response) => {
            console.log(response)
            if (!response.ok) throw new Error(response.statusText)
            return response.json()
        })
        .then((itemList)=>{
            console.log(apiUrl)
            isLoading = false
            const {streams, _links} = itemList
            if (this.state.stream.length === 0){
                this.setState({
                    _links: _links,
                    stream: streams,
                })
            }else{
                let oldStreams = this.state.stream
                this.setState({
                    _links: _links,
                    stream: oldStreams.concat(streams),
                })
            }
            
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
    // 記得要用 Arrow function
    handleScroll = (e) => {
        // 目前視窗可視頁面 html 大小 固定大小
        // console.log(document.body.offsetHeight);
        // 捲動位置 從 0 開始
        // console.log(window.scrollY);
        // 總 html 大小 固定大小
        // console.log(document.body.scrollHeight);

        if (document.body.scrollHeight <= document.body.offsetHeight + window.scrollY + 200 ){
            if (isLoading === false){
                apiUrl = this.state._links.next + client_id 
                this.handleTwitchItemsLoad()
            }
        }

    }

    componentDidMount() {
        // 元件"已經"載入，所以可以載入資料進來
        this.handleTwitchItemsLoad()
        window.addEventListener('scroll', this.handleScroll);
      }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
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
