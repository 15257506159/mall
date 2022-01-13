import axios from 'axios'

//最优解
export function request(config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  //配置拦截器
  instance.interceptors.request.use(config => {
    console.log(config)
    return config
  }, err => {
    console.log(err);
  })
  instance.interceptors.response.use(res => {
    console.log(res);
    return res.data
  }, err => {
    console.log(err);
    return err
  })
  return instance(config)
}
