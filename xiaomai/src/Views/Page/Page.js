import React, { Component } from 'react'
import Navtwo from "../../Components/Navtwo";
import Bottom from "../../Components/Bottom";
import page from "./Page.module.css";
import Axios from '../../Module/Axios';
import Posterb from "../../Components/Posterb";
import 'antd/dist/antd.css';
import { Pagination, Result, Icon, Button } from 'antd';
export default class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tid: 0,
            cid: 0,
            tid1: 0,
            sid: 1,
            citys: ["全国", "上海市", "北京市", "杭州", "深圳", "成都市", "广州", "武汉", "南京"],
            types: ["全部", "音乐会", "话剧", "演唱会", "曲苑", "歌剧", "舞蹈", "体育", "亲子"],
            times: ["全部", "今天", "明天", "本周末", "一个月内"],
            sorts: ["相关度排序", "推荐排序", "最近开场", "最新上架"],
            data: [],
            city: '',
            type: ''
        }
    }
    changestyle(cid, city) {
        this.setState({
            cid,
            city
        });
        this.getData();
    }
    changestyle1(tid) {
        this.setState({
            tid
        });
        this.getData();

    }
    changestyle2(tid1) {
        this.setState({
            tid1

        })
    }
    changestyle3(sid) {
        this.setState({
            sid

        })
    }
    getPosterb(i) {
        if (i.length < 1) {
            return <Result
                icon={<Icon type="smile" theme="twoTone" />}
                title="没有找到符合条件的商品。您可以减少筛选条件重新搜索。"
                extra={<Button type="primary">Next</Button>}
            />
        } else {
            return (i.map((item, ind) => {
                return <Posterb poster={item} key={ind}></Posterb>
            }))
        }
    }
    getData() {
        Axios.get("/page/getClassify", { params: { city: this.state.city, type: this.state.type } }).then(res => {
            this.setState({
                data: res.data
            })
            console.log(res.data)
        })
            .catch(err => {
                console.log(err);
            })
    }
    componentDidMount() {
        Axios.get("/page/getClassify").then(res => {
            this.setState({
                data: res.data
            })
        })
            .catch(err => {
                console.log(err);
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
                                return <div className={page.titleevery + (this.state.cid == ind ? (' ' + page.titleevery1) : '')} key={ind} onClick={this.changestyle.bind(this, ind, i)} city={i}>{i}</div>
                            })}
                        </div>
                    </div>
                    <div className={page.line}></div>
                    <div className={page.titleone}>
                        <span>分 类：</span>
                        <div className={page.titlebox}>
                            {this.state.types.map((i, ind) => {
                                return <div className={page.titleevery + (this.state.tid == ind ? (' ' + page.titleevery1) : '')} key={ind} onClick={this.changestyle1.bind(this, ind)} type={i}>{i}</div>
                            })}
                        </div>
                    </div>
                    <div className={page.line}></div>
                    <div className={page.titleone}>
                        <span>时 间：</span>
                        <div className={page.titlebox}>
                            {this.state.times.map((i, ind) => {
                                return <div className={page.titleevery + (this.state.tid1 == ind ? (' ' + page.titleevery1) : '')} key={ind} onClick={this.changestyle2.bind(this, ind)} >{i}</div>
                            })}
                        </div>
                    </div>
                </div>
                <div className={page.showbox}>
                    <div className={page.showbox1}>
                        {this.state.sorts.map((i, ind) => {
                            return <div className={page.showevery + (this.state.sid == ind ? (' ' + page.showevery1) : '')} key={ind} onClick={this.changestyle3.bind(this, ind)} >{i}</div>
                        })}
                    </div>
                    {this.getPosterb(this.state.data)}
                    <Pagination defaultCurrent={1} total={50} className={page.paging} />
                </div>
                <Bottom></Bottom>
            </div >
        )
    }
}
