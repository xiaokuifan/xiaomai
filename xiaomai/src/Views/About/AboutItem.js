import React, { Component } from 'react';
import abouti from "./AboutItem.module.css";
import Sign from "./Sign";

export default class AboutItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 1,
            num: 0,
            pricelist: [],
            timelist: []
        }
        this.cadd = this.cadd.bind(this);
        this.cmil = this.cmil.bind(this)
    }

    isShop(i) {
        let n = Date.now().valueOf();
        let m = new Date(i).valueOf();
        if (n < m) {
            return <div className={abouti.rightremind}>
                <div className={abouti.rightremindl}>预售|</div>
                <div className={abouti.rightremindr}>
                    <div className={abouti.rightremindrt}>
                        本商品为预售商品，正式开票后将在第一时间为您配送
                            </div>
                    <div className={abouti.rightremindrb}>
                        预售期间，由于主办未正式开票，下单后无法立即配送票品。一般演出前2-6周出票，待正式开票后将在第一时间为您配送，请耐心等待。纸质票购票后可在订单详情页查看物流信息
                            </div>
                </div>
            </div>
        }
    }

    cTime(e) {
        let n = this.state.timelist;
        for (let a = 0; a < n.length; a++) {
            n[a] = 0;
        }
        n[e] = 1;
        this.setState({
            timelist: n
        })
        n = "";
    }

    cPrice(e) {
        let n = this.state.pricelist;
        let m = 0;
        for (let a = 0; a < n.length; a++) {
            n[a].state = 0;
        }
        n[e].state = 1;
        m = n[e].price;
        this.setState({
            pricelist: n,
            num: m
        })
        n = "";
        m = "";
    }

    cmil() {
        let n = this.state.count;
        if (n > 1) {
            n--;
            this.setState({
                count: n
            })
        } else {
            return;
        }

    }

    cadd() {
        let a = this.state.count;
        let b = this.props.aboutitem.limittic;
        if (a < b) {
            a++;
            this.setState({
                count: a
            })
        } else {
            alert(`该票每人限制购买${b}张！`)
            return;
        }
    }

    sum() {
        let e = this.state.num;
        let n = this.state.count;
        return e * n;
    }
    
  

    render() {
        return (
            <div className={abouti.abouti}>
                <div className={abouti.left}>
                    <div className={abouti.leftt}>
                        <img className={abouti.leftti} src={this.props.aboutitem.imgurl} />
                        <div className={abouti.leftts}>
                            <Sign></Sign>
                        </div>

                    </div>
                </div>

                <div className={abouti.right}>
                    <div className={abouti.righttop}>{this.props.aboutitem.name}</div>

                    <div className={abouti.rightmid}>时间：{this.props.aboutitem.showtime}</div>

                    <div className={abouti.rightmidf}>
                        <div className={abouti.rightmid}>场馆：{this.props.aboutitem.address}|{this.props.aboutitem.addressdetail}</div>
                    </div>

                    {this.isShop(this.props.aboutitem.shoptime)}

                    <div className={abouti.rightbremind}>
                        <div className={abouti.rightbremindl}>!</div>
                        <div>场次时间均为演出当地时间</div>
                    </div>

                    <div className={abouti.rightbtime}>
                        <div className={abouti.rightbtimel}>场次</div>
                        <div className={abouti.rightbtimer}>
                            {this.props.aboutitem.timelist.map((t, ind) => {
                                if (ind == 0) {
                                    this.state.timelist.push(1);
                                    return <div key={ind} className={this.state.timelist[ind] ? abouti.rightbtimericli : abouti.rightbtimeri} onClick={this.cTime.bind(this, ind)}>{t}</div>
                                }
                                else {
                                    this.state.timelist.push(0);
                                    return <div key={ind} className={this.state.timelist[ind] ? abouti.rightbtimericli : abouti.rightbtimeri} onClick={this.cTime.bind(this, ind)}>{t}</div>
                                }
                            })}
                        </div>
                    </div>

                    <div className={abouti.rightbtime}>
                        <div className={abouti.rightbtimel}>票档</div>
                        <div className={abouti.rightbtimer}>
                            {this.props.aboutitem.pricelist.map((p, ind) => {
                                if (ind == 0) {
                                    this.state.pricelist.push({ state: 1, price: p.price });
                                    return <div key={ind} className={this.state.pricelist[ind].state ? abouti.rightbtimericli : abouti.rightbtimeri} onClick={this.cPrice.bind(this, ind)}>{p.price}</div>
                                }
                                else {
                                    this.state.pricelist.push({ state: 0, price: p.price });
                                    return <div key={ind} className={this.state.pricelist[ind].state ? abouti.rightbtimericli : abouti.rightbtimeri} onClick={this.cPrice.bind(this, ind)}>{p.price}</div>
                                }

                            })}
                        </div>
                    </div>

                    <div className={abouti.rightbtime}>
                        <div className={abouti.rightbtimel}>数量</div>
                        <div className={abouti.rightbtimer}>
                            <div className={abouti.rightnumber}>
                                <div className={this.state.count <= 1 ? abouti.rightnumberolim : abouti.rightnumbero} onClick={this.cmil}>-</div>
                                <div className={abouti.rightnumberi}>{this.state.count}</div>
                                <div className={this.state.count >= this.props.aboutitem.limittic ? abouti.rightnumberolim : abouti.rightnumbero} onClick={this.cadd}>+</div>
                            </div >
                        </div>
                    </div>

                    <div className={abouti.rightbtime}>
                        <div className={abouti.rightbtimel}>合计</div>
                        <div className={abouti.sum}>
                            ￥{this.sum(this.state.num)}
                        </div>
                    </div>

                    <div className={abouti.sub}>
                        立即购买
                    </div>


                </div>
            </div>
        )
    }
}

