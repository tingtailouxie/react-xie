 

// 根据原有的state和action 返回新的state
// 管理count数据的reducer函数

import {
     INCREMENT,
     DECREMENT
} from './action-types'

export default function count(state = 1,action){
   switch(action.type){
       case INCREMENT:
            return state + action.data
       case DECREMENT:
            return state - action.data
       default:
           return state //返回原来的值
   }
}