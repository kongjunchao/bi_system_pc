/**
 * @author JUNCHAO KONG
 * @date 2016-10-19
 * @description 访问日志模块
 */

import React from 'react';
import ReactDom from 'react-dom';
import TableData from './common/table_data.js';
import moment from 'moment';
import { Input, Button } from 'antd';

const table_option_1 = {
	title : '访问日志',
	columns : [
		{
			title : '用户ID',
			dataIndex : 'a',
			key : 'a'
		},
		{
			title : '用户名称',
			dataIndex : 'b',
			key : 'b'
		},
		{
			title : '模块',
			dataIndex : 'c',
			key : 'c'
		},
		{
			title : '模块名',
			dataIndex : 'd',
			key : 'd'
		},
		{
			title : '链接',
			dataIndex : 'e',
			key : 'e'
		},
		{
			title : '访问时间',
			dataIndex : 'f',
			key : 'f'
		}
	],
	url : './components/data/test_data_1.json',
	source : []
};

class AccessLog extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
		}
	}
	
	handleChange(){
	}
	
	componentWillMount(){
	}
	
	componentDidMount(){
	}

	render(){
		return (
			<div className="main-box">
				<div className="top-nav">
					工具 > 访问日志
				</div>
				<div className="div-1">
					<span className="span-1">用户ID / 名称</span>
					<Input />
					<span className="span-1">访问链接</span>
					<Input />
					<Button type="primary">搜索</Button>
				</div>
				<TableData tableOptions={table_option_1} />
			</div>
		);
	}

}

export default AccessLog;