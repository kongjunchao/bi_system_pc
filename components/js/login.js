/**
 * @author JUNCHAO KONG
 * @date 2016-10-19
 * @description 登录模块
 */

import React from 'react';
import ReactDom from 'react-dom';
import { Input, Button } from 'antd';
//引入样式表
import 'antd/dist/antd.css';
import '../css/login.scss';
require('./login_canvas.js');

class Login extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
		}
	}
	
	handleClick(){
		window.location.href = 'index.html';
	}
	
	render(){
		return (
			<div className="main">
				<h1>
					<img src="./components/images/logo.png" />
				</h1>
				<ul>
					<li>
						<label>用户名</label>
						<Input />
					</li>
					<li>
						<label>密码</label>
						<Input />
					</li>
					<li>
						<Button type="primary" onClick={this.handleClick.bind(this)}>登录</Button>
					</li>
				</ul>
			</div>
		);
	}

}

ReactDom.render(<Login />, document.getElementById('main'))