import React, { Component } from 'react';
import Navtwo from "../../Components/Navtwo";
import AboutItem from "./AboutItem";
import Paper from "./Paper";
import about from "./About.module.css";
import Poster from "../../Components/Poster";
import Axios from "../../Module/Axios";


export default class About extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: { timelist: [], pricelist: [], billtype: {} },
            introduce: []
        }

    }
    componentDidMount() {
        let i = this.props.match.params.aid;
        Axios.get("/about/getAbout", { params: { aid: i } }).then((res) => {
            res.data[0].timelist = JSON.parse(res.data[0].timelist);
            res.data[0].pricelist = JSON.parse(res.data[0].pricelist);
            res.data[0].billtype = JSON.parse(res.data[0].billtype);
            console.log(res.data[0]);
            this.setState({
                data: res.data[0]
            })
            this.getIntroduce(res.data[0].address);
        })
            .catch(err => {
                console.log(err);
            })
    }

    getIntroduce() {
        let i = this.props.match.params.address;
        Axios.get("/about/getintroduce", { address: i }).then((res) => {
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
                <Navtwo></Navtwo>
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
                            <div className={about.rightbt}>为你推荐</div>
                            <div className={about.rightbb}>
                                
                                {
                                    this.state.introduce.map((p, ind) => {
                                        return <Poster poster={p} key={ind}></Poster>
                                    })
                                }
                            </div>
                        </div>
                    </div >
                </div>
            </div>
        )
    }
}
