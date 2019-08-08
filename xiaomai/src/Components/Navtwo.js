import React, { Component } from 'react';
import navstyle from './Navtwo.module.css';
import { Link } from 'react-router-dom';
import Axios from '../Module/Axios';


export default class nav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: ''
        }
    }
    componentDidMount() {
        Axios.get("/user/getAccount")
            .then(res => {
                this.setState({
                    username: res.data.account
                })

            })
            .catch(err => {
                console.log(err);
            });
    }
    render() {
        return (
            <div className={navstyle.nav}>
                <div className={navstyle.navson}>
                    <div className={navstyle.logo}>
                        <img src='http://localhost:8081/images/logo.png' ></img>
                    </div>
                    <div className={navstyle.navbar}>
                        <div className={navstyle.index}><Link to="/">首页</Link></div>
                        <div className={navstyle.classify}><Link to="/page">分类</Link></div>
                    </div>
                    <div className={navstyle.search}>
                        <input type="text" className={navstyle.input} placeholder="搜索明星、演出、体育赛事">
                        </input>
                        <img src='http://localhost:8081/images/ico/search.png' className={navstyle.searchimg}></img>
                        <div className={navstyle.inputnext}>搜索</div>
                    </div>
                    <div className={navstyle.loginbox}>
                        欢迎您！{this.state.username}
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
