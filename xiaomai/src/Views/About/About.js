import React, { Component } from 'react';
import Nav from "../../Components/Nav";
import AboutItem from "./AboutItem";
import Paper from "./Paper";
import about from "./About.module.css";
import Axios from "../../Module/Axios";


export default class About extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {timelist:[],pricelist:[]},
            introduce: []
        }

    }
    componentDidMount() {
        let i = this.props.location.query.aid;
        Axios.get("/getabout", { params: { aid: i } }).then((res) => {
            res.data[0].timelist = JSON.parse(res.data[0].timelist);
            res.data[0].pricelist = JSON.parse(res.data[0].pricelist);
            this.setState({
                data: res.data[0]
            })

        })
            .catch(err => {
                console.log(err);
            })
    }

    getIntroduce() {
        let i = this.props.location.query.address;
        Axios.get("/getintroduce", { address: i }).then((res) => {
            this.setState({
                introduce: res.data
            })
        })
            .catch(err => {
                console.log(err);
            })
    }





    render() {
        return (
            <div className={about.about}>
                <Nav></Nav>
                <div className={about.all}>
                    <div className={about.left}>

                        <AboutItem aboutitem={this.state.data}></AboutItem>
                        <div className={about.leftb}>

                            <div className={about.leftbt}>
                                <div className={about.leftbtb}>
                                    项目详情
                           </div>
                                <div className={about.leftbtb}>
                                    购票须知
                            </div>
                                <div className={about.leftbtb}>
                                    观演须知
                           </div>
                            </div>
                            <div className={about.leftbb}></div>
                            <div className={about.leftbb}></div>
                            <div className={about.leftbb}></div>
                        </div>
                    </div>
                    <div className={about.right}>
                        <Paper paper={this.state.data.billtype}></Paper>
                        <div className={about.rightb}>
                            {/* <div className={about.rightbt}>为你推荐</div>
                            <div className={about.rightbb}>
                                {this.getIntroduce()}
                                {
                                    this.state.introduce.map((p, ind) => {
                                        return <poster poster={p} key={ind}></poster>
                                    })
                                }
                            </div> */}
                        </div>
                    </div >
                </div>
            </div>
        )
    }
}
