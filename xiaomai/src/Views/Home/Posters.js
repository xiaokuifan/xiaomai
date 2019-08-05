import React, { Component } from 'react';
import posters from './Posters.module.css';
import Poster from './Poster.js';
let ueel = 'http://localhost:8081/images/ueel.jpg';

export default class Posters extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {
                title: "演唱会",
                imgurl: ueel,
                name: "7770",
                price: "562",
                posters: [
                    {
                        title: "演唱会",
                        imgurl: ueel,
                        name: "7770",
                        price: "562"
                    },
                    {
                        title: "演唱会",
                        imgurl: ueel,
                        name: "7770",
                        price: "562"
                    },
                    {
                        title: "演唱会",
                        imgurl: ueel,
                        name: "7770",
                        price: "562"
                    },
                    {
                        title: "演唱会",
                        imgurl: ueel,
                        name: "7770",
                        price: "562"
                    },
                    {
                        title: "演唱会",
                        imgurl: ueel,
                        name: "7770",
                        price: "562"
                    },
                    {
                        title: "演唱会",
                        imgurl: ueel,
                        name: "7770",
                        price: "562"
                    }
                ]
            }
        }
    }
    render() {
        return (
            <div className={posters.posters}>
                <div className={posters.ptop}>
                    <div className={posters.ptopl}>{this.state.data.title}</div>
                    <div className={posters.ptopr}>查看全部</div>
                </div>
                <div className={posters.pbot}>
                    <div className={posters.pbotl}>
                        <img src={this.state.data.imgurl} className={posters.pbotli}/>
                        <div className={posters.pbotld}>
                            <div className={posters.pbotldi}>{this.state.data.name}</div>
                            <div className={posters.pbotldi}>{this.state.data.price}</div>
                        </div>
                    </div>
                    <div className={posters.pbotr}>
                        {this.state.data.posters.map((p, ind) => {
                            return <Poster poster={p} key={ind}></Poster>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
