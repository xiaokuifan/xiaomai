import React, { Component } from 'react'
import Nav from "../../Components/Nav";
import Notable from "../../Components/Notable";
import Posters from "../../Views/Home/Posters";
import NavList from "../../Components/NavList";
import Bottom from "../../Components/Bottom";
import Axios from "../../Module/Axios";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        }
        this.showSwiper = this.showSwiper.bind(this);
    }

    componentDidMount() {
        Axios.get("/home/getnotable", { params: { aid: this.state.data } }).then(res => {
            this.setState({
                data: res
            })
        })
            .catch(err => {
                console.log(err)
            })
    }

    showSwiper(ev) {
        console.log(ev.target)
        this.setState({
            data: ev.target.ad
        })
    }


    render() {
        return (
            <div>
                <Nav></Nav>
                <Notable></Notable>
                <NavList></NavList>
                <Posters title={"演唱会"}></Posters>
                <Posters title={"话剧歌剧"}></Posters>
                <Posters title={"体育比赛"}></Posters>
                <Bottom></Bottom>
            </div>
        )
    }
}
