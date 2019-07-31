import React, { Component } from 'react';
import poster from './Poster.module.css';

export default class Poster extends Component {
    constructor(props){
       super(props)
    }
    render() {
        return (
            <div className={poster.poster}>
                <div className={poster.pleft}>
                    <img src={this.props.poster.imgurl} className={poster.plefti}/>
                </div>
                <div className={poster.pright}>
                    <div className={poster.prightt}>
                    <div className={poster.prighttt}>{this.props.poster.name}</div>
                    <div className={poster.prighttb}>{this.props.poster.address}</div>
                    <div className={poster.prighttb}>{this.props.poster.time}</div>
                    </div>
                    <div className={poster.prightb}>{this.props.poster.price}</div>
                </div>
            </div>
        )
    }
}
