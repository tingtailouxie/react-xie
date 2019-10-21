import {connect} from 'react-redux'

import {increment,decrement} from '../redux/action-creators'
import Counter from '.。/components/counter'

/*
容器组件
用来指向ui、组件传递过来的一般属性的回调函数 
 */

 export default connect(
    state =>({count:state}), //指向ui组件传递的一般属性
    {increment,decrement} //指向ui组件传递的函数属性increment(){}/decrement(){}
    // 内部会包装成一个新的函数传入ui组件
 )(Counter)//ui组件count


