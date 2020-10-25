/*
通过mutation间接更新state的多个方法的对象
*/
import {
  RECEIVER_ADDRESS,
  RECEIVER_CATEGORYS,
  RECEIVER_SHOPS
} from "./mutation-types"
import {
  reqAddress,
  reqFoodCategorys,
  reqShops} from '../api'

export default {
  //异步获取地址
  async getAddress({commit,state}){
    //发送异步ajax请求
    const geohash=state.latitude+","+state.longitude
    const result = await reqAddress(geohash)
    //提交一个mutation
    if (result.code===0){
      const address=result.data
      commit(RECEIVER_ADDRESS,{address})
    }
  },
  //异步获取食品列表
  async getCategorys({commit,state}){
    //发送异步ajax请求
    const result = await reqFoodCategorys()
    //提交一个mutation
    if (result.code===0){
      const categorys=result.data
      commit(RECEIVER_CATEGORYS,{categorys})
    }
  },
  //异步获取商家列表
  async getShops({commit,state}){
    //发送异步ajax请求
    const {longitude,latitude} = state
    const result = await reqShops(state)
    //提交一个mutation
    if (result.code===0){
      const shops=result.data
      commit(RECEIVER_SHOPS,{shops})
    }
  }
}
