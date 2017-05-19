/**
 * @author JUNCHAO KONG
 * @date 2016-10-19
 * @description 邮件管理系统-任务日志模块
 */

import React from 'react';
import ReactDom from 'react-dom';
import TableData from './common/table_data.js';
import moment from 'moment';
import { Input, Button, Select } from 'antd';
const Option = Select.Option;

const table_option_1 = {
	title : '任务日志',
	columns : [
		{
			title : '任务标题',
			dataIndex : 'a',
			key : 'a'
		},
		{
			title : '执行脚本',
			dataIndex : 'b',
			key : 'b'
		},
		{
			title : '开始执行时间',
			dataIndex : 'c',
			key : 'c'
		},
		{
			title : '执行时长',
			dataIndex : 'd',
			key : 'd'
		},
		{
			title : '状态',
			dataIndex : 'e',
			key : 'e'
		},
		{
			title : '执行结果',
			dataIndex : 'f',
			key : 'f'
		}
	],
	url : './components/data/test_data_1.json',
	source : []
};

class MailManagementTaskLog extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			params : {
			}
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
					工具 > 邮件管理系统 > 任务日志
				</div>
				<TableData tableOptions={table_option_1} params={this.state.params} />
			</div>
		);
	}

}

export default MailManagementTaskLog;