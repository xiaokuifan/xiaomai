import React, { Component } from 'react'
import './nav.css'

export default class nav extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="nav">
                <div className="navson">
                    <div className="logo">
                        <img src="../../public/img/logo.png"></img>
                    </div>
                </div>
            </div>
        )
    }
}
