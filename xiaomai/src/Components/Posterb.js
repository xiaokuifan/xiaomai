import React, { Component } from 'react';
import posterb from './Posterb.module.css';
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
            <div className={posterb.poster}>
                <div className={posterb.pleft} onClick={this.goAbout}>
                    <img src={this.props.poster.imgurl} className={posterb.plefti} />
                </div>
                <div className={posterb.pright}>
                    <div className={posterb.prightt}>
                        <div className={posterb.prighttt}>{this.props.poster.name}</div>
                        <div className={posterb.prighttb}>{this.props.poster.address}</div>
                        <div className={posterb.prighttb}>{this.props.poster.showtime}</div>
                    </div>
                    <div className={posterb.prightb}>￥{JSON.parse(this.props.poster.pricelist)[0].price}起</div>
                </div>
            </div>
        )
    }
}
export default withRouter(Poster);
