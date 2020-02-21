import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Gnb from '../components/Gnb';
import axios from 'axios/index';
import WebtoonInfo from "../components/WebtoonInfo";
import EpisodeList from "../components/EpisodeList";


class WebtoonHome extends Component{
    constructor(props) {
        super(props);

        this.state = {
            webtoonId : parseInt(props.match.params.webtoonId, 10),
            webtoon : {},
            episodeList : [],
        };
    }

    componentDidMount() {
        this._getWebtoon();
        this._getEpisodeList();
    }

    _getWebtoon(){
        const apiUrl = '/dummy/webtoon_detail.json';

        axios.get(apiUrl)
            .then(data => {
                this.setState({
                    webtoon : data.data.webtoons.find(w => (
                        w.id === this.state.webtoonId
                        ))
                    });
            })
            .catch(error => {
                console.log(error);
            });
    }

    _getEpisodeList() {
        const apiUrl = '/dummy/episode_list.json';

        axios.get(apiUrl)
            .then(data => {
                this.setState({
                    episodeList : data.data.webtoonEpisodes.filter(episode => (
                        episode.webtoonId === this.state.webtoonId
                    ))
                });
            })
            .catch(error => {
                console.log(error);
            });
    }
    render(){
        return (
            <div>
                <Header />
                <Gnb />

                { this.state.webtoon.id ? (
                    <WebtoonInfo webtoon ={this.state.webtoon} />
                ) : (
                    <span>Loading...</span>
                )}

                { this.state.episodeList.length > 0 ? (
                    <EpisodeList episodes={this.state.episodeList} />
                ) : (
                    <span>Loading...</span>
                )}
                
                <Footer />
            </div>
        );
    }
}

export default WebtoonHome;