import React, { Component } from 'react'
import liststyle from './NavList.module.css'
import { Link } from 'react-router-dom';

export default class NavList extends Component {
    render() {
        return (
            <div className={liststyle.father}>
                <div className={liststyle.son}>
                    <div className={liststyle.sonimg}>
                        <img src='http://localhost:8081/images/ico/vocal.png' alt="定位图片"></img>
                    </div>
                    <span className={liststyle.sontext}><Link to="/page">演唱会</Link></span>
                </div>
                <div className={liststyle.son}>
                    <div className={liststyle.sonimg}>
                        <img src='http://localhost:8081/images/ico/huaju.png' ></img>
                    </div>
                    <span className={liststyle.sontext}><Link to="/page">话剧歌剧</Link></span>
                </div>
                <div className={liststyle.son}>
                    <div className={liststyle.sonimg}>
                        <img src='http://localhost:8081/images/ico/sport.png' ></img>
                    </div>
                    <span className={liststyle.sontext}><Link to="/page">体育</Link></span>
                </div>
                <div className={liststyle.son}>
                    <div className={liststyle.sonimg}>
                        <img src='http://localhost:8081/images/ico/children.png' ></img>
                    </div>
                    <span className={liststyle.sontext}><Link to="/page">儿童亲子</Link></span>
                </div>
                <div className={liststyle.son}>
                    <div className={liststyle.sonimg}>
                        <img src='http://localhost:8081/images/ico/view.png'></img>
                    </div>
                    <span className={liststyle.sontext}><Link to="/page">展览休闲</Link></span>
                </div>
                <div className={liststyle.son}>
                    <div className={liststyle.sonimg}>
                        <img src='http://localhost:8081/images/ico/sing.png' ></img>
                    </div>
                    <span className={liststyle.sontext}><Link to="/page">音乐会</Link></span>
                </div>
                <div className={liststyle.son}>
                    <div className={liststyle.sonimg}>
                        <img src='http://localhost:8081/images/ico/qu.png'></img>
                    </div>
                    <span className={liststyle.sontext}><Link to="/page">曲苑杂坛</Link></span>
                </div>
                <div className={liststyle.son}>
                    <div className={liststyle.sonimg}>
                        <img src='http://localhost:8081/images/ico/balei.png' ></img>
                    </div>
                    <span className={liststyle.sontext}><Link to="/page">舞蹈芭蕾</Link></span>
                </div>
                <div className={liststyle.son}>
                    <div className={liststyle.sonimg}>
                        <img src='http://localhost:8081/images/ico/erciyuan.png' ></img>
                    </div>
                    <span className={liststyle.sontext}><Link to="/page">二次元</Link></span>
                </div>
                <div className={liststyle.son}>
                    <div className={liststyle.sonimg}>
                        <img src='http://localhost:8081/images/ico/travel.png'></img>
                    </div>
                    <span className={liststyle.sontext}><Link to="/page">旅游展览</Link></span>
                </div>
            </ div>
        )
    }
}
