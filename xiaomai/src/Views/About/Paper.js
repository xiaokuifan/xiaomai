import React, { Component } from 'react'
import paper from "./Paper.module.css";

export default class Paper extends Component {
    constructor(props) {
        super(props)
    }

    sSet(i) {
        switch (i) {
            case 0:
                return <div>
                    <div><div></div>可选座</div>
                    <div>本项目支持自主选座
1. 选择演出时间，并点击“选座购票”进入选座页面
2. 选座后，在15分钟内支付成功，选座生效
*先付后选的项目需要先付款，到开放选座的日期我们会短信通知，请注意查收</div>
                </div>
                break;

            case 1:
                return <div>
                    <div>不支持选座</div>
                    <div>本项目不支持自主选座，同一个订单优先连座</div>
                </div>
                break;
        }
    }

    sTicket(i) {

    }

    sInv(i) {

    }

    render() {
        return (
            <div className={paper.paper}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        )
    }
}
