import React, { Component } from 'react';
import axios from 'axios';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Gnb from '../components/Gnb';
import WebtoonList from '../components/WebtoonList';

class Main extends Component {
    constructor(props) {
        super (props);

        const query = new URLSearchParams(props.location.search);
        const day = query.get('day');

        this.state = {
            day : day || 'mon',
            webtoonList:[]
        };
    }

    componentDidMount() {
        this._getList();
    }

    componentDidUpdate(prevProps) {
        let prevQuery = new URLSearchParams(prevProps.location.search);
        let prevDay = prevQuery.get('day');

        let query = new URLSearchParams(this.props.location.search);
        let day = query.get('day');

        if(prevDay !== day){
            this.setState({
                day
            })
        };
    }

    _getList() {
        const apiUrl = 'dummy/webtoon_list.json';

        axios.get(apiUrl)
            .then(data=>{
                this.setState({
                    webtoonList : data.data.webtoonList
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
                    <Gnb day={this.state.day} />
                    
                <div className="contents">
                    { this.state.webtoonList.length > 0 ? (
                        <WebtoonList list={
                            this.state.webtoonList.filter(webtoon => (
                                webtoon.day === this.state.day
                                ))} />
                    ) : (
                        <span>
                            LOADING...
                        </span>
                    )}
                </div>                
                <Footer />
            </div>
        );
    }
}

export default Main;