import React, { Component } from 'react';
import posters from './Posters.module.css';
import Poster from '../../Components/Poster';
import Axios from '../../Module/Axios';
let ueel = 'http://localhost:8081/images/ueel.jpg';

export default class Posters extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }


    componentDidMount() {
        Axios.get("/getposters").then(res => {
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
            <div className={posters.posters} >
                <div className={posters.ptop}>
                    <div className={posters.ptopl}>{this.props.title}</div>
                    <div className={posters.ptopr}>查看全部</div>
                </div>
                <div className={posters.pbot}>
                    <div className={posters.pbotl}>
                        <img src={this.state.data.imgurl} className={posters.pbotli} />
                        <div className={posters.pbotld}>
                            <div className={posters.pbotldi}>{this.state.data.name}</div>
                            <div className={posters.pbotldi}>{this.state.data.price}</div>
                        </div>
                    </div>
                    <div className={posters.pbotr}>
                        {this.state.data.map((d, ind) => {
                            return <Poster poster={d} key={ind}></Poster>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

