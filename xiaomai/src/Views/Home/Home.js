import React, { Component } from 'react'
import Nav from "../../Components/nav";
import Posters from "./Posters";


export default class Home extends Component {
    render() {
        return (
            <div>
                <Nav></Nav>
                <Posters></Posters>
            </div>
        )
    }
}
