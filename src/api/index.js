import axios from 'axios';
import base from './base'
const api={
  //获取首页数据
  gethomecount(){
    return axios.get(base.homecount);
  },
  //获取用户信息
  getUserInfo(){
    return axios.get(base.getUserInfo)
  },
  //获取商品信息
  getGoodsInfo(){
    return axios.get(base.getGoodsInfo)
  },
  //根据ID获取商品信息
  getGoodsById(id){
    return axios.get(base.getGoodsInfoById)
  },
  //删除商品信息
  deleteGoodsInfo(){
    return axios.get(base.deleteGoods)
  },
  //更新商品信息
  updateGoodsInfo(){
    return axios.get(base.updateGoods)
  },

  //获取订单信息
  getOrderInfo(){
    return axios.get(base.getOrderInfo)
  },
  //根据ID获取订单信息
  getOrderById(id){
    return axios.get(base.getOrderById)
  },
  //删除订单信息
  deleteOrderInfo(){
    return axios.get(base.deleteOrder)
  },
  //更新订单信息
  updateOrderInfo(){
    return axios.get(base.updateOrder)
  },



  //获取用户信息
  getUserInfodetail(){
    return axios.get(base.getUserInfo)
  },
  //根据ID获取用户信息
  getUserById(id){
    return axios.get(base.getUserInfo)
  },
  //删除用户信息
  deleteUserInfo(){
    return axios.get(base.homecount)
  },
  //更新用户信息
  updateUserInfo(){
    return axios.get(base.homecount)
  },


}
export default api;