import axios from 'axios';
import CONFIG from '../apis';

const instance = axios.create({
  baseURL: CONFIG.BASEURL,
  timeout: 10000,
  headers: {

  }
})

instance.interceptors.request.use(function (config) {
  return config;
})

instance.interceptors.response.use(function (res) {
  return res;
}, function (e) {
  return Promise.reject(e);
})

export function demo ({data}) {
  return instance({
    method: 'get',
    url: '/demo',
    data: {}
  })
}