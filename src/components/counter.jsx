import PropTypes from 'prop-types'
import React,{Component} from 'react'

/* ui组件：不使用任何redux相关语法 */
export default class Counter extends Component{
    static propTypes = {
        //显示一般属性
        count:PropTypes.number.isRequired,
        // 更新一般属性
        increment:PropTypes.func.isRequired,
        decrement:PropTypes.func.isRequired,
    }

    //创建一个ref容器
    numberRef = React.createRef()

    increment = ()=>{
        // 获取用户输入的值
        const number = this.numberRef.current.value*1
        // 通知store做增加的更新  dispatch() 产生新的state
        this.props.increment(number)
    }
   
    decrement = ()=>{
        //获取用户输入的值
        const number = this.numberRef.current.value*1
        // 通知store做减少的更新  dispatch() 产生新的state
        this.props.decrement(number)
    }

    incrementIfOdd = ()=>{
        // 获取当前的状态
        const count = this.props.count

        //获取用户输入的值
        const number = this.numberRef.current.value*1
        if(count % 2 === 1){
            this.props.increment(number)
        }
    }

    incrementAsync = ()=>{
        //获取用户输入的值
        const number = this.numberRef.current.value*1 
        setTimeout(()=>{
            this.props.increment(number)
        },1000)
    }


    render(){
        // 得到store中的状态
        const count = this.props.count
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

