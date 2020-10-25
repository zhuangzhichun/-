/*
直接更新state的多个方法的对象
*/
import {
  RECEIVER_ADDRESS,
  RECEIVER_CATEGORYS,
  RECEIVER_SHOPS
} from "./mutation-types"
export default {
  [RECEIVER_ADDRESS](state,{address}){
    state.address=address
  },
  [RECEIVER_CATEGORYS](state,{categorys}){
    state.categorys=categorys
  },
  [RECEIVER_SHOPS](state,{shops}){
    state.shops=shops
  }
}
