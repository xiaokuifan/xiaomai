import React, { Component } from 'react';
import Swiper from 'react-native-swiper';
import notable from './Notable.module.css';

export default class Notable extends Component {
    render() {
        return (
            <Swiper showsButtons="true" autoplay="true" className={notable.father}>
                {this.props.notables.map((n, ind) => {
                    <div key={ind} className={notable.son}>
                        <img src={n.imgurl} className={notable.soni}/>
                    </div>
                })}
            </Swiper>
        )
    }
}
