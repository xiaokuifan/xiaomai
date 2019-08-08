import React, { Component } from 'react'
import navstyle from './Nav.module.css'
import { Link } from 'react-router-dom';

export default class nav extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className={navstyle.nav}>
                <div className={navstyle.navson}>
                    <div className={navstyle.logo}>
                        <img src='http://localhost:8081/images/logo.png' ></img>
                    </div>
                    <div className={navstyle.global}>
                        <div className={navstyle.globalt}>
                            <div className={navstyle.position}>
                                <img src='http://localhost:8081/images/ico/location.png' ></img>
                            </div>
                            <div className={navstyle.text}>全国</div>
                            <img src='http://localhost:8081/images/ico/down.png' className={navstyle.downarrow}></img>
                        </div>
                    </div>
                    <div className={navstyle.navbar}>
                        <div className={navstyle.index}>首页</div>
                        <div className={navstyle.page}><Link to="/page">分类</Link></div>
                    </div>
                    <div className={navstyle.search}>
                        <input type="text" className={navstyle.input} placeholder="搜索明星、演出、体育赛事">
                        </input>
                        <img src='http://localhost:8081/images/ico/search.png' className={navstyle.searchimg}></img>
                        <div className={navstyle.inputnext}>搜索</div>
                    </div>
                    <div className={navstyle.loginbox}>
                        <img src='http://localhost:8081/images/ico/login.png' className={navstyle.loginimg}></img>
                        <div className={navstyle.logintext}><Link to="/login">登录</Link></div>
                    </div>
                    <div className={navstyle.downbox}>
                        <img src='http://localhost:8081/images/ico/download.png' className={navstyle.loginimg}></img>
                        <div className={navstyle.logintext}>下载</div>
                    </div>
                    <div className={navstyle.downbox}>
                        <img src='http://localhost:8081/images/ico/english.png' className={navstyle.loginimg}></img>
                        <div className={navstyle.logintext}>English</div>
                    </div>
                </div>
            </div>
        )
    }
}
