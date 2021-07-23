import axios from 'axios'

// axios.create方法 === 自定义实例默认值 优先级高点，相比下面的方法更推荐点
// axios.defaults.baseURL = "http://ttapi.research.itcast.cn/", 也可以
// export default axios;

const request = axios.create({
  baseURL: "http://ttapi.research.itcast.cn/",
});

export default request;
