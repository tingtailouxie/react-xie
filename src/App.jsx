import React, {Component} from 'react'
import { Button } from 'antd';
import {HashRouter,BrowserRouter,Route,Switch} from 'react-router-dom'

import Admin from "./pages/admin/admin";
import Login from "./pages/login/login"

export default class App extends Component{
    render(){
        return (
            <HashRouter>
                {/* /login/xxx   默认使用不完全匹配 | 使用第一个匹配的路由 */}
                <Switch>  {/*查找路由，找到第一个匹配的就不往下找了 */}
                    <Route path='/login' component={Login}/> {/*不完全匹配，只要是钱买你是/的路径，都可以匹配这个路由 */}
                    <Route path='/' component={Admin}/>
                </Switch>
            </HashRouter>
        )
    }
}


