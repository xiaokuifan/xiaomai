import React, { Component } from 'react';
import poster from './Poster.module.css';
import { withRouter } from 'react-router-dom';

class Poster extends Component {
    constructor(props) {
        super(props)
        this.goAbout = this.goAbout.bind(this);
    }

    goAbout() {
        let i = this.props.poster.aid;
        this.props.history.push({ pathname: "/about" + `/${i}` })
    }

    render() {
        return (
            <div className={poster.poster}>
                <div className={poster.pleft} onClick={this.goAbout}>
                    <img src={this.props.poster.imgurl} className={poster.plefti} />
                </div>
                <div className={poster.pright}>
                    <div className={poster.prightt}>
                        <div className={poster.prighttt}>{this.props.poster.name}</div>
                        <div className={poster.prighttb}>{this.props.poster.address}</div>
                        <div className={poster.prighttb}>{this.props.poster.showtime}</div>
                    </div>
                    <div className={poster.prightb}>￥{JSON.parse(this.props.poster.pricelist)[0].price}起</div>
                </div>
            </div>
        )
    }
}
export default withRouter(Poster);
