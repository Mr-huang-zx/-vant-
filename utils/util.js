


// 2021/04/23 10:07:46 时间格式
export function formatTime(date){
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}
// end

// 数组对象根据数字升序
export function arrSort(date){
  return date.sort((e,x)=>{
    return e.value-x.value
  })
}
// end

// 金钱加逗号","
export function toMoney(a) {
  a = a.toString().replace(/\$|\,/g, '');
  if (isNaN(a)) {
    a = "0";
  }
  let sign = (a == (a = Math.abs(a)));
  a = Math.floor(a * 100 + 0.50000000001);
  let cents = a % 100;
  a = Math.floor(a / 100).toString();
  if (cents < 10) {
    cents = "0" + cents
  }
  for (var i = 0; i < Math.floor((a.length - (1 + i)) / 3); i++) {
    a = a.substring(0, a.length - (4 * i + 3)) + ',' + a.substring(a.length - (4 * i + 3));
  }

  return (((sign) ? '' : '-') + a + '.' + cents);
}

// module.exports = {
//   formatTime,
// }
