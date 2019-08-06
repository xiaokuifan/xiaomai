import axios from 'axios'
axios.defaults.baseURL = "http://localhost:8081";
axios.defaults.withCredentials = true;
export default class Axios {
    //封装一个get请求
    //static:返回静态方法 直接使用该方法 不用创建实例对象
    static get(url, params = {}) {
        return new Promise((resolve, reject) => {
            axios.get(url, params)
                .then(res => {
                    if (res.status == '200') {
                        resolve(res);
                    }
                    else {
                        console.log(res)
                        reject(res);
                    }
                })
                .catch(err => {
                    reject(err);
                })
        });
    }
    //封装一个post请求
    static post(url, params = {}) {
        return new Promise((resolve, reject) => {
            axios.post(url, params)
                .then(res => {
                    if (res.status == '200') {
                        resolve(res);
                    }
                    else {
                        console.log(res)
                        reject(res);
                    }
                })
                .catch(err => {
                    reject(err);
                })
        });
    }
}