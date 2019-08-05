import React, { Component } from 'react'
import Nav from "../../Components/Nav";
import Notable from "../../Components/Notable";
import Posters from "./Posters";
import NavList from "../../Components/NavList";
import Bottom from "../../Components/Bottom";


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        }
        this.showSwiper = this.showSwiper.bind(this);
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
                <Nav change={this.showSwiper}></Nav>
                <Notable></Notable>
                <NavList></NavList>
                <Posters></Posters>
                <Posters></Posters>
                <Posters></Posters>
                <Posters></Posters>
                <Bottom></Bottom>
            </div>
        )
    }
}
