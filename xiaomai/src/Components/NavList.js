import React, { Component } from 'react'
import liststyle from './NavList.module.css'

export default class NavList extends Component {
    render() {
        return (
            <div className={liststyle.father}>
                <div className={liststyle.son}>
                    <div className={liststyle.sonimg}>
                        <img src='http://localhost:8081/images/ico/vocal.png' alt="定位图片"></img>
                    </div>
                    <span className={liststyle.sontext}>演唱会</span>
                </div>
                <div className={liststyle.son}>
                    <div className={liststyle.sonimg}>
                        <img src='http://localhost:8081/images/ico/huaju.png' ></img>
                    </div>
                    <span className={liststyle.sontext}>话剧歌剧</span>
                </div>
                <div className={liststyle.son}>
                    <div className={liststyle.sonimg}>
                        <img src='http://localhost:8081/images/ico/sport.png' ></img>
                    </div>
                    <span className={liststyle.sontext}>体育</span>
                </div>
                <div className={liststyle.son}>
                    <div className={liststyle.sonimg}>
                        <img src='http://localhost:8081/images/ico/children.png' ></img>
                    </div>
                    <span className={liststyle.sontext}>儿童亲子</span>
                </div>
                <div className={liststyle.son}>
                    <div className={liststyle.sonimg}>
                        <img src='http://localhost:8081/images/ico/view.png'></img>
                    </div>
                    <span className={liststyle.sontext}>展览休闲</span>
                </div>
                <div className={liststyle.son}>
                    <div className={liststyle.sonimg}>
                        <img src='http://localhost:8081/images/ico/sing.png' ></img>
                    </div>
                    <span className={liststyle.sontext}>音乐会</span>
                </div>
                <div className={liststyle.son}>
                    <div className={liststyle.sonimg}>
                        <img src='http://localhost:8081/images/ico/qu.png'></img>
                    </div>
                    <span className={liststyle.sontext}>曲苑杂坛</span>
                </div>
                <div className={liststyle.son}>
                    <div className={liststyle.sonimg}>
                        <img src='http://localhost:8081/images/ico/balei.png' ></img>
                    </div>
                    <span className={liststyle.sontext}>舞蹈芭蕾</span>
                </div>
                <div className={liststyle.son}>
                    <div className={liststyle.sonimg}>
                        <img src='http://localhost:8081/images/ico/erciyuan.png' ></img>
                    </div>
                    <span className={liststyle.sontext}>二次元</span>
                </div>
                <div className={liststyle.son}>
                    <div className={liststyle.sonimg}>
                        <img src='http://localhost:8081/images/ico/travel.png'></img>
                    </div>
                    <span className={liststyle.sontext}>旅游展览</span>
                </div>
            </ div>
        )
    }
}
