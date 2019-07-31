import React, { Component } from 'react'
import Nav from "../../Components/Nav";
import Posters from "./Posters";


export default class Home extends Component {
    render() {
        return (
            <div>
                <Nav></Nav>
         <Notable></Notable>
                <Posters></Posters>
            </div>
        )
    }
}
