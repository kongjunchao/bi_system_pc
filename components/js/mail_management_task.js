/**
 * @author JUNCHAO KONG
 * @date 2016-10-19
 * @description 邮件管理系统-任务管理模块
 */

import React from 'react';
import ReactDom from 'react-dom';
import TableData from './common/table_data.js';
import moment from 'moment';
import { Input, Button, Radio, Select, Popconfirm, message, Modal } from 'antd';
const RadioGroup = Radio.Group;
const Option = Select.Option;

function confirmDelete(){
	message.success('删除成功');
}

class MailManagementTask extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			visible : false,
			type : 'add',		//add or edit
			confirmLoading : false,
			value : "路径脚本"
		}
	}
	
	handleChange(e){
		this.setState({
			value : e.target.value
		})
	}
	
	showModal(type){
		this.setState({
			visible : true,
			type : type
		})
	}
	
	handleOk(){
		this.setState({
			confirmLoading : true
		})
		setTimeout(() => {
			this.setState({
				visible : false,
				confirmLoading : false
			})
		}, 2000)
	}
	
	handleCancel(){
		this.setState({
			visible : false
		})
	}
	
	componentWillMount(){
	}
	
	componentDidMount(){
	}

	render(){
		const table_option_1 = {
			title : '任务管理',
			columns : [
				{
					title : '任务ID',
					dataIndex : 'a',
					key : 'a'
				},
				{
					title : '标题',
					dataIndex : 'b',
					key : 'b'
				},
				{
					title : '执行时间',
					dataIndex : 'c',
					key : 'c'
				},
				{
					title : '脚本路径',
					dataIndex : 'd',
					key : 'd'
				},
				{
					title : '状态',
					dataIndex : 'e',
					key : 'e'
				},
				{
					title : '操作',
					key : 'action',
					width : 200,
					className : 'action-column',
					render : () => (
						<span className="table-action">
							<a href="javascript:void(0);">邮箱管理</a>|
							<a href="javascript:void(0);" onClick={this.showModal.bind(this, 'edit')}>编辑</a>|
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
		return (
			<div className="main-box">
				<div className="top-nav">
					工具 > 邮件管理系统 > 任务管理
				</div>
				<div className="div-1">
					<Button type="primary" onClick={this.showModal.bind(this, 'add')}>添加任务</Button>
				</div>
				<TableData tableOptions={table_option_1} />
				<Modal title={this.state.type === 'add' ? '添加任务' : '编辑任务'}
					visible={this.state.visible}
					onOk={this.handleOk.bind(this)}
					onCancel={this.handleCancel.bind(this)}
					confirmLoading={this.state.confirmLoading}
				>
					<ul className="ul-edit">
						<li>
							<label>标题</label>
							<Input />
						</li>
						<li>
							<label>脚本类型</label>
							<RadioGroup value={this.state.value} onChange={this.handleChange.bind(this)}>
								<Radio value="路径脚本">路径脚本</Radio>
								<Radio value="api">api</Radio>
							</RadioGroup>
						</li>
						<li>
							<label>脚本路径</label>
							<Input />
						</li>
						<li>
							<label>执行时间</label>
							<Input />
						</li>
						<li>
							<label>关联模板</label>
							<Select 
								style = {{width:100}}
								defaultValue = "1"
							>
								<Option value="1">全部</Option>
							</Select>
						</li>
						<li>
							<label>优先级</label>
							<Input />
						</li>
						<li>
							<label>任务描述</label>
							<Input type="textarea" rows={4} />
						</li>
					</ul>
				</Modal>
			</div>
		);
	}

}

export default MailManagementTask;