import axios from 'axios'
export function request(config){
    const instance = axios.create({
        baseURL:'http://152.136.185.210:7878/api/hy66',
    })

                // axios的拦截器 请求拦截
                instance.interceptors.request.use(config=>{
                    return config
                },err =>{
                    //console.log(err);
                })
     
                //响应拦截
                instance.interceptors.response.use(res =>{
                    return res.data
                },err =>{
                    console.log(err);
                })

    //发送网络请求
    return instance(config) ///返回的是一个promise
}