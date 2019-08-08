import React, { Component } from 'react'
import login from './Login.module.css';
import { Link } from 'react-router-dom';
import Bottom from "../../Components/Bottom";
import Axios from '../../Module/Axios'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardInfo: true,
            cardInfo1: false,
            cardInfo2: false,
            i: 1,
            ruleForm: {
                account: "",
                passwd: ""
            },
            ruleForm1: {
                account: "",
                passwd: ""
            },



        }
        this.changeStyle = this.changeStyle.bind(this);
        this.changeStyle1 = this.changeStyle1.bind(this);
        this.changeStyle2 = this.changeStyle2.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.inputChange2 = this.inputChange2.bind(this);
        this.inputChange3 = this.inputChange3.bind(this);
        this.inputChange4 = this.inputChange4.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.submitForm1 = this.submitForm1.bind(this);
    };

    changeStyle() {
        this.setState({
            cardInfo: true,
            cardInfo1: false,
            cardInfo2: false,
            i: 1
        })
    }
    changeStyle1() {
        this.setState({
            cardInfo: false,
            cardInfo1: true,
            cardInfo2: false,
            i: 2
        })
    }
    changeStyle2() {
        this.setState({
            cardInfo: false,
            cardInfo1: false,
            cardInfo2: true,
            i: 3
        })
    }

    display() {
        switch (this.state.i) {
            case 1:
                return <div className={login.last}>
                    <input type="text" placeholder="请输入手机号或邮箱" className={login.input} onChange={this.inputChange3}></input>
                    <div className={login.logo}>
                        <img src='http://localhost:8081/images/ico/my.png'></img>
                    </div>
                    <input type="password" placeholder="请输入登录密码" className={login.input} onChange={this.inputChange4}></input>
                    <div className={login.logo1}>
                        <img src='http://localhost:8081/images/ico/lock.png'></img>
                    </div>
                    <div className={login.dl} onClick={this.submitForm1}>登录</div>
                    <div className={login.every}>
                        <div className={login.everyson}>
                            <img src='http://localhost:8081/images/ico/xin.png'></img>
                        </div>
                        <div className={login.everyson}>
                            <img src='http://localhost:8081/images/ico/haah.png'></img>
                        </div>
                        <div className={login.everyson}>
                            <img src='http://localhost:8081/images/ico/wei.png'></img>
                        </div>
                        <div className={login.everyson}>
                            <img src='http://localhost:8081/images/ico/zhi.png'></img>
                        </div>
                    </div>
                    <div className={login.bottom}>
                        <div className={login.bottomson}><Link to="/findpw">忘记密码</Link></div>
                        <div className={login.bottomson}><Link to="/reg">免费注册</Link></div>
                    </div>
                </div>
                break;
            case 2:
                return <div className={login.last}>
                    <input type="text" placeholder="请输入手机号或邮箱" className={login.input} onChange={this.inputChange}></input>
                    <div className={login.logo}>
                        <img src='http://localhost:8081/images/ico/phone.png'></img>
                    </div>
                    <input type="password" placeholder="请输入登录密码" className={login.input} onChange={this.inputChange2}
                    ></input>
                    <div className={login.logo1}>
                        <img src='http://localhost:8081/images/ico/123.png'></img>
                    </div>
                    <div className={login.dl} onClick={this.submitForm}>注册</div>
                </div>
                break;
        }
    }

    inputChange(e) {
        let val = e.target.value;
        let data = Object.assign({}, this.state.ruleForm, { account: val })
        this.setState({
            ruleForm: data
        });
    }
    inputChange2(e) {
        let val = e.target.value;
        //修改state对象
        let data = Object.assign({}, this.state.ruleForm, { passwd: val })
        this.setState({
            ruleForm: data
        });
    }
    inputChange3(e) {
        let val = e.target.value;
        let data = Object.assign({}, this.state.ruleForm1, { account: val })
        this.setState({
            ruleForm1: data
        });
    }
    inputChange4(e) {
        let val = e.target.value;
        //修改state对象
        let data = Object.assign({}, this.state.ruleForm1, { passwd: val })
        this.setState({
            ruleForm1: data
        });
    }
    submitForm() {
        Axios.post("/user/reg", this.state.ruleForm)
            .then(response => {
                if (response.data.msg == "account_already_exist") {
                    alert("账号名已存在，请您重新注册")
                } else if (response.data.msg == "reg_success") {
                    alert("恭喜您注册成功，请登录享受更好的体验~")
                    let da = this.state.ruleForm;
                    this.setState({
                        ruleForm1: da
                    });
                    this.changeStyle();

                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    submitForm1() {
        Axios.post("/user/login", this.state.ruleForm1)
            .then(response => {
                if (response.data.msg == "account_no_exist") {
                    alert("账号不存在", "请您先注册")
                } else if (response.data.msg == "false password") {
                    alert("密码错误", "请您重新输入密码")
                } else if (response.data.msg == "login_success") {
                    this.props.history.push('/self', null);

                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <div className={login.firstbox}>
                    <div className={login.imgbox}>
                        <img src='http://localhost:8081/images/logo.png'></img>
                    </div>
                </div>
                <div className={login.secondbox}>
                    <img src='http://localhost:8081/images/loginbg.png' ></img>
                    <div className={login.loginbox}>
                        <div className={login.loginboxfirst}>
                            <div className={this.state.cardInfo ? login.loginboxfirstson1 : login.loginboxfirstson} onClick={this.changeStyle}>密码登录</div>
                            <div className={this.state.cardInfo1 ? login.loginboxfirstson1 : login.loginboxfirstson} onClick={this.changeStyle1}>用户注册</div>
                            <div className={this.state.cardInfo2 ? login.loginboxfirstson1 : login.loginboxfirstson} onClick={this.changeStyle2}>扫码登录</div>
                        </div>
                        {this.display()}
                    </div>
                </div>
                <Bottom></Bottom>
            </div>
        )
    }
}
