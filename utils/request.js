// 请求封装
const baseUrl = "";
const http = options=>{
  return new Promise((resolve,reject)=>{
    wx.request({
      url:baseUrl + options.url,
      method:'POST',
      data:options.data,
      success:resolve,
      fail:reject
    })
  })
}
module.exports ={
  http
}