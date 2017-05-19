/**
 * @author JUNCHAO KONG
 * @date 2016-10-19
 * @description 邮件管理系统-任务邮箱管理模块
 */

import React from 'react';
import ReactDom from 'react-dom';
import TableData from './common/table_data.js';
import moment from 'moment';
import { Input, Button, Select, Popconfirm, message } from 'antd';
const Option = Select.Option;

function confirmDelete(){
	message.success('删除成功');
}

const table_option_1 = {
	title : '任务邮箱管理',
	columns : [
		{
			title : '任务ID',
			dataIndex : 'a',
			key : 'a'
		},
		{
			title : '任务标题',
			dataIndex : 'b',
			key : 'b'
		},
		{
			title : '邮箱',
			dataIndex : 'c',
			key : 'c'
		},
		{
			title : '称呼',
			dataIndex : 'd',
			key : 'd'
		},
		{
			title : '操作',
			key : 'action',
			width : 100,
			className : 'action-column',
			render : () => (
				<span className="table-action">
					<Popconfirm title="确定要删除吗？" onConfirm={confirmDelete} okText="Yes" cancelText="No">
						<a href="javascript:void(0);">删除</a>
					</Popconfirm>
				</span>
			)
		}
	],
	url : './components/data/test_data_1.json',
	source : []
};

class MailManagementTaskMail extends React.Component{
	
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
					工具 > 邮件管理系统 > 任务邮箱管理
				</div>
				<div className="div-1">
					<span className="span-1">任务标题</span>
					<Select 
						style = {{width:160}}
						onChange = {this.handleChange.bind(this)}
						defaultValue = "全部"
					>
						<Option value="全部">全部</Option>
					</Select>
					<span className="span-1">邮箱</span>
					<Input />
					<span className="span-1">称呼</span>
					<Input />
					<Button type="primary">搜索</Button>
					<Button type="primary">添加</Button>
				</div>
				<TableData tableOptions={table_option_1} params={this.state.params} />
			</div>
		);
	}

}

export default MailManagementTaskMail;