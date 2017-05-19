/**
 * @author JUNCHAO KONG
 * @date 2016-10-19
 * @description 消息模块
 */

import React from 'react';
import ReactDom from 'react-dom';
import { Collapse } from 'antd';
const Panel = Collapse.Panel;

class Message extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
		}
	}
	
	componentWillMount(){
	}
	
	componentDidMount(){
	}

	render(){
		return (
			<div className="main-box">
				<div className="top-nav">
					消息
				</div>
				<div className="div-1" style={{height:"auto"}}>
					<Collapse>
						<Panel header="新版本BI系统上线啦!!!" key="1">
							<p>新版本BI系统上线啦!!!</p>
						</Panel>
						<Panel header="系统在调试阶段,有任何问题请随时联系开发人员!!!" key="2">
							<p>系统在调试阶段,有任何问题请随时联系开发人员!!!</p>
						</Panel>
						<Panel header="建议使用Google Chrome以获得最佳浏览体验" key="3">
							<p>建议使用Google Chrome以获得最佳浏览体验</p>
						</Panel>
					</Collapse>
				</div>
			</div>
		);
	}

}

export default Message;