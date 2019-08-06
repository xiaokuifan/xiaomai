import React, { Component } from 'react';
import abouti from "./AboutItem.module.css";
import Sign from "./Sign";

export default class AboutItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 1,
            num: ''
        }
    }

    componentDidUpdate (){
        console.log(this.props.aboutitem.timelist)
        console.log(this.props.aboutitem.pricelist)
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


    render() {
        return (
            <div className={abouti.abouti}>
                <div className={abouti.left}>
                    <div className={abouti.leftt}>
                        <img className={abouti.leftti} src={this.props.aboutitem.imgurl} />
                        <Sign className={abouti.leftts}></Sign>
                    </div>
                </div>

                <div className={abouti.right}>
                    <div className={abouti.righttop}>{this.props.aboutitem.name}</div>

                    <div className={abouti.rightmid}>时间：{this.props.aboutitem.showtime}</div>

                    <div className={abouti.rightmidf}>
                        <div className={abouti.rightmid}>场馆：{this.props.aboutitem.address}|{this.props.aboutitem.addressdetail}</div>
                        <div className={abouti.rightblo}></div>
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
                                return <div key={ind} className={abouti.rightbtimeri}>{t}</div>
                            })}
                        </div>
                    </div>

                    <div className={abouti.rightbtime}>
                        <div className={abouti.rightbtimel}>票档</div>
                        <div className={abouti.rightbtimer}>
                            {this.props.aboutitem.pricelist.map((p, ind) => {
                                return <div key={ind} className={abouti.rightbtimeri}>{p.price}</div>
                            })}
                        </div>
                    </div>

                    <div className={abouti.rightbtime}>
                        <div className={abouti.rightbtimel}>数量</div>
                        <div className={abouti.rightbtimer}>
                            <div className={abouti.rightnumber}>
                                <div className={abouti.rightnumbero}>-</div>
                                <div className={abouti.rightnumberi}>{this.state.count}</div>
                                <div className={abouti.rightnumbero}>+</div>
                            </div >
                        </div>
                    </div>

                    <div className={abouti.rightbtime}>
                        <div className={abouti.rightbtimel}>合计</div>
                        <div className={abouti.rightbtimer}>
                            ￥{this.state.num}
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

