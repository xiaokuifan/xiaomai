import React, { Component } from 'react'
import sign from "./Sign.module.css";

export default class Sign extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: ""
        }
    }
    chooice() {
        this.setState({
            data: this.props.sign
        })
    }
    render() {
        return (
            <div className={sign.sign}>
                预售
            </div>

        )
    }
}
