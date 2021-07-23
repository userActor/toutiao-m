import request from "../utils/request";

export default {
  // 1.从后端请求数据过来  axios传参 get 请求用params   post请求用 data
  postLoginDatas(data) {
    return request({
      method: "POST",
      url: "/app/v1_0/authorizations",
      data,
    });
  },
};
