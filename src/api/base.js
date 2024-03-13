//公共的配置文件

//变量
//const host="";
const base = {
  host: 'http://localhost:8077',
  homecount: 'http://localhost:3000/api/data',
  getUserInfo: 'http://localhost:3001/api/data',
  getUserById:'http://localhost:3000/api/data',
  getGoodsInfo: 'http://localhost:3000/api/GetGooddata',
  getGoodsInfoById:"api/GetGoodById",
  getOrderInfo:"/api/getOrderInfo",
  getOrderById:"/api/getOrderById",
  getOrderDetailInfo:"/api/getOrderDetailInfo",
  getGoodsImageInfo:"/api/getGoodsImageInfo",


  addGoods:"api/addGoods",
  addOrder:"api/addOrder",
  addUser:"api/addUser",

  deleteGoods:"api/deleteGoods",
  deleteOrder:"api/deleteOrder",
  deleteUser:"api/deleteUser",


  updateGoods:"api/updateGoods",
  updateOrder:"api/updateOrder",
  updateUser:"api/updateUser",
}

export const host = 'http://localhost:8088'
export default base
