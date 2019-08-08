import React, { Component } from 'react';
import posters from './Posters.module.css';
import Poster from '../../Components/Poster';
import Axios from '../../Module/Axios';

export default class Posters extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            dataone: { pricelist: [{}] }
        }
    }


    componentDidMount() {
        Axios.get("/home/getposters").then(res => {
            res.data[0].pricelist = JSON.parse(res.data[0].pricelist)
            this.setState({
                data: res.data.splice(1, res.data.length - 1),
                dataone: res.data[0]
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
                        <img src={this.state.dataone.imgurl} className={posters.pbotli} />
                        <div className={posters.pbotld}>
                            <div className={posters.pbotldi}>{this.state.dataone.name}</div>
                            <div className={posters.pbotldi}>{this.state.dataone.pricelist[0].price}</div>
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