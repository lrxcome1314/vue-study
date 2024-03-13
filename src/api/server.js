import axios from 'axios'
const axiosInstance = axios.create({
  baseURL: '/',
  timeout: 5000,
})
// 添加请求拦截器
axiosInstance.interceptors.request.use(
  // 在发送请求之前做些什么
  (config) => {
    return config
  },
  //对请求错误做些什么
  (err) => {
    return Promise.reject(err);
  }
)
// 
axiosInstance.interceptors.response.use((response) => {
// 对响应数据做点什么
return response;
},
(err)=>{
// 对响应错误做点什么
return Promise.reject(err);
})
export default axiosInstance
