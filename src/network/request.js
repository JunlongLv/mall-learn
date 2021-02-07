import axios from "axios";

export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })

  // 2.1.axios的请求拦截器
  // axios.interceptors 全局拦截器
  instance.interceptors.request.use(config => {
    // 应用场景：
    // 1.比如config中的一些信息不符合服务器的要求
    // 2.比如每次发送网络请求时，都希望在界面中显示一个加载的动画
    // 3.某些网络请求（比如登录（token)),必须携带一些特殊的信息
    return config
  },error => {
    console.log(error)
  })

  // 2.2.响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  },error => {
    console.log(error)
  })

  // 3.发送真正的网络请求
  return instance(config)
}
