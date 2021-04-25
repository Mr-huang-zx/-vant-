const http = require('./request')
export function gets(){
  return http({
    url:'/login',
    data:""
  })
}