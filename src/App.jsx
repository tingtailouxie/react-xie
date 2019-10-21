import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {increment,decrement} from './redux/action-creators'

export default class App extends Component{
    static propTypes = {
        //使用store 
        store:PropTypes.object.isRequired
    }

    //创建一个ref容器
    numberRef = React.createRef()

    increment = ()=>{
        // 获取用户输入的值
        const number = this.numberRef.current.value*1
        // 通知store做增加的更新  dispatch() 产生新的state
        this.props.store.dispatch(increment(number))
    }
   
    decrement = ()=>{
        //获取用户输入的值
        const number = this.numberRef.current.value*1
        // 通知store做减少的更新  dispatch() 产生新的state
        this.props.store.dispatch(decrement(number))
    }

    incrementIfOdd = ()=>{
        // 获取当前的状态
        const count = this.props.store.getState()

        //获取用户输入的值
        const number = this.numberRef.current.value*1
        if(count % 2 === 1){
           this.props.store.dispatch(increment(number))
        }
    }

    incrementAsync = ()=>{
        //获取用户输入的值
        const number = this.numberRef.current.value*1 
        setTimeout(()=>{
            this.props.store.dispatch(increment(number))
        },1000)
    }


    render(){
        // 得到store中的状态
        const count = this.props.store.getState()
        return (
            <div>
                <p>click {count} times </p>
                <div>
                    <select ref={this.numberRef}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <button onClick={this.increment}>+</button>
                    <button onClick={this.decrement}>-</button>
                    <button onClick={this.incrementIfOdd}>increment if odd</button>
                    <button onClick={this.incrementAsync}>increment async</button>
                </div>
            </div>
        )
    }
}


