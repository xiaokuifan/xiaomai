import React, { Component } from 'react'
import Navtwo from "../../Components/Navtwo";
import Bottom from "../../Components/Bottom";
import page from "./Page.module.css";
import 'antd/dist/antd.css';
import { Pagination } from 'antd';
export default class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: false,
            citys: ["全 国", "上 海", "北 京", "杭 州", "深 圳", "成 都", "广 州", "武 汉", "南 京"],
            types: ["音乐会", "话 剧", "演唱会", "曲 苑", "歌 剧", "舞 蹈", "体 育", "亲 子", "展 览"],
            times: ["全 部", "今 天", "明 天", "本周末", "一个月内"]
        }
    }
    changestyle() {
        this.setState({
            info: true
        })
    }
    render() {
        return (
            <div>
                <Navtwo></Navtwo>
                <div className={page.title}>
                    <div className={page.titleone}>
                        <span>城 市：</span>
                        <div className={page.titlebox}>
                            {this.state.citys.map((i, ind) => {
                                return <div className={this.state.info ? page.titleevery1 : page.titleevery} key={ind} onClick={this.changestyle.bind(this)} s="true">{i}</div>
                            })}
                        </div>
                    </div>
                    <div className={page.line}></div>
                    <div className={page.titleone}>
                        <span>分 类：</span>
                        <div className={page.titlebox}>
                            {this.state.types.map((i, ind) => {
                                return <div className={this.state.info ? page.titleevery1 : page.titleevery} key={ind}  >{i}</div>
                            })}
                        </div>
                    </div>
                    <div className={page.line}></div>
                    <div className={page.titleone}>
                        <span>时 间：</span>
                        <div className={page.titlebox}>
                            {this.state.times.map((i, ind) => {
                                return <div className={this.state.info ? page.titleevery1 : page.titleevery} key={ind}  >{i}</div>
                            })}
                        </div>
                    </div>
                </div>
                <div className={page.showbox}>
                    <div className={page.showbox1}></div>
                    <Pagination defaultCurrent={1} total={50} className={page.paging} />
                </div>
                <Bottom></Bottom>
            </div>
        )
    }
}
