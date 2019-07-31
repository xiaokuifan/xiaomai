import React, { Component } from 'react'
import navstyle from './nav.module.css'

export default class nav extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className={navstyle.nav}>
                <div className={navstyle.navson}>
                    <div className={navstyle.logo}>
                        <img src={require('../img/logo.png')} alt="小麦搜索"></img>
                    </div>
                    <div className={navstyle.global}>
                        <div className={navstyle.position}>
                            <img src={require('../img/location.png')} alt="定位图片"></img>
                        </div>
                        <div className={navstyle.text}>全国</div>
                        <img src={require('../img/down.png')} alt="下拉" className={navstyle.downarrow}></img>
                    </div>
                    <div className={navstyle.navbar}>
                        <div className={navstyle.index}>首页</div>
                        <div className={navstyle.classify}>分类</div>
                    </div>
                    <div className={navstyle.search}>
                        <input type="text" className={navstyle.input} placeholder="搜索明星、演出、体育赛事">
                        </input>
                        <img src={require('../img/search.png')} alt="搜索" className={navstyle.searchimg}></img>
                        <div className={navstyle.inputnext}>搜索</div>
                    </div>
                    <div className={navstyle.loginbox}>
                        <img src={require('../img/login.png')} alt="登录" className={navstyle.loginimg}></img>
                        <div className={navstyle.logintext}>登录</div>
                    </div>
                    <div className={navstyle.downbox}>
                        <img src={require('../img/download.png')} alt="搜索" className={navstyle.loginimg}></img>
                        <div className={navstyle.logintext}>下载</div>
                    </div>
                    <div className={navstyle.downbox}>
                        <img src={require('../img/english.png')} alt="搜索" className={navstyle.loginimg}></img>
                        <div className={navstyle.logintext}>English</div>
                    </div>
                </div>
            </div>
        )
    }
}
