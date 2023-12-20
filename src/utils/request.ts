import axios, {AxiosResponse} from 'axios'
import type {AxiosError} from 'axios'
import {ElMessage} from 'element-plus'
import {userInfo} from "@/store/user/userInfo.ts";
import {getTimeStamp} from "@/utils/time.ts";



const service = axios.create({
    baseURL: import.meta.env.VITE_API_ENDPOINT, // url = base url + request url
    timeout: 120000, // request timeout
})

const user = userInfo()


const timeOut = 8

// 请求拦截器
service.interceptors.request.use(
    config => {
        if (user.token!=="") {
            // 主动检测 判断token是否过期过期-现在大于1小时则过期
            if ((+new Date() - getTimeStamp()) / 1000 > 3600 * timeOut) {

                return Promise.reject(new Error('登录超时'))
            }
            // config.headers['Authorization']
        }
        // 必须要返回的
        return config
    },
    error => {
        console.log(error) // for debug
        return Promise.reject(error)
    },
)

// 响应拦截器

service.interceptors.response.use(
    <T>(response:AxiosResponse<Promise<T>> ) => {

        return Promise.resolve(response)
    },
    (error:AxiosError) => {


        // 处理 HTTP 网络错误
        let message = ''
        // HTTP 状态码
        const status = error.response?.status
        switch (status) {
            case 401:
                message = 'token 失效，请重新登录'
                // 这里可以触发退出的 action
                break;
            case 403:
                message = '拒绝访问'
                break;
            case 404:
                message = '请求地址错误'
                break;
            case 500:
                message = '服务器故障'
                break;
            default:
                message = '网络连接故障'
        }

        ElMessage({
            message:message,
            type: 'warning',
        })
        return Promise.reject(error)
    },
)



export default service


