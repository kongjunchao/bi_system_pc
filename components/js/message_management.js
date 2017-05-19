/**
 * @author JUNCHAO KONG
 * @date 2016-10-19
 * @description 公告管理模块
 */

import React from 'react';
import ReactDom from 'react-dom';
import TableData from './common/table_data.js';
import moment from 'moment';
import { Input, Button, Select, Popconfirm, message, Modal } from 'antd';
const Option = Select.Option;
import FormReg from './common/form_reg.js';
const formReg = new FormReg();

function confirmDelete(){
	message.success('删除成功');
}

class MessageManagement extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			visible : false,
			type : 'add',		//add or edit
			confirmLoading : false
		}
	}
	
	handleChange(){
	}
	
	showModal(type){
		this.setState({
			visible : true,
			type : type
		})
	}
	
	handleOk(){
		let modal_input_title = this.refs.modal_input_title.refs.input.value.trim();
		let modal_input_time = this.refs.modal_input_time.refs.input.value.trim();
		let modal_input_level = this.refs.modal_input_level.refs.input.value.trim();
		let modal_input_describe = this.refs.modal_input_describe.refs.input.value.trim();
		if(formReg.isEmpty(modal_input_title)){
			message.error('标题不能为空');
			return;
		}
		if(formReg.isEmpty(modal_input_time)){
			message.error('过期设置不能为空');
			return;
		}
		if(formReg.isEmpty(modal_input_level)){
			message.error('优先级不能为空');
			return;
		}
		if(formReg.isEmpty(modal_input_describe)){
			message.error('描述不能为空');
			return;
		}
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
	
	getData(){
		let input_title = this.refs.input_title.refs.input.value.trim();
		console.log(input_title);
		if(formReg.isEmpty(input_title)){
			message.error('标题不能为空');
			return;
		}
	}
	
	componentWillMount(){
	}
	
	componentDidMount(){
	}

	render(){
		const table_option_1 = {
			title : '公告管理',
			columns : [
				{
					title : '公告ID',
					dataIndex : 'a',
					key : 'a'
				},
				{
					title : '标题',
					dataIndex : 'b',
					key : 'b'
				},
				{
					title : '介绍',
					dataIndex : 'c',
					key : 'c'
				},
				{
					title : '过期设置',
					dataIndex : 'd',
					key : 'd'
				},
				{
					title : '过期时间',
					dataIndex : 'e',
					key : 'e'
				},
				{
					title : '开启展示',
					dataIndex : 'f',
					key : 'f'
				},
				{
					title : '优先级',
					dataIndex : 'g',
					key : 'g'
				},
				{
					title : '操作',
					key : 'action',
					width : 100,
					className : 'action-column',
					render : () => (
						<span className="table-action">
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
					工具 > 公告管理
				</div>
				<div className="div-1">
					<span className="span-1">标题</span>
					<Input ref="input_title" />
					<Button type="primary" onClick={this.getData.bind(this)}>搜索</Button>
					<Button type="primary" onClick={this.showModal.bind(this, 'add')}>添加新公告</Button>
				</div>
				<TableData tableOptions={table_option_1} />
				<Modal title={this.state.type === 'add' ? '添加公告' : '编辑公告'}
					visible={this.state.visible}
					onOk={this.handleOk.bind(this)}
					onCancel={this.handleCancel.bind(this)}
					confirmLoading={this.state.confirmLoading}
				>
					<ul className="ul-edit">
						<li>
							<label>标题</label>
							<Input ref="modal_input_title" />
						</li>
						<li>
							<label>过期设置</label>
							<Input ref="modal_input_time" />
						</li>
						<li>
							<label>优先级</label>
							<Input ref="modal_input_level" />
						</li>
						<li>
							<label>描述</label>
							<Input ref="modal_input_describe" type="textarea" rows={4} />
						</li>
					</ul>
				</Modal>
			</div>
		);
	}

}

export default MessageManagement;