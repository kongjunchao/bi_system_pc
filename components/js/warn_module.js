/**
 * @author JUNCHAO KONG
 * @date 2016-10-19
 * @description 预警管理系统-预警模块
 */

import React from 'react';
import ReactDom from 'react-dom';
import TableData from './common/table_data.js';
import moment from 'moment';
import { Input, Button, Radio, Select, Popconfirm, message, Modal } from 'antd';

function confirmDelete(){
	message.success('删除成功');
}

class WarnModule extends React.Component{
	
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
			title : '预警模块',
			columns : [
				{
					title : 'ID',
					dataIndex : 'a',
					key : 'a'
				},
				{
					title : '模块',
					dataIndex : 'b',
					key : 'b'
				},
				{
					title : '模块名称',
					dataIndex : 'c',
					key : 'c'
				},
				{
					title : 'URL',
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
							<a href="javascript:void(0);">预警指标</a>|
							<a href="javascript:void(0);">手机号管理</a>|
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
					工具 > 预警管理系统 > 预警模块
				</div>
				<div className="div-1">
					<Button type="primary" onClick={this.showModal.bind(this, 'add')}>添加预警模块</Button>
				</div>
				<TableData tableOptions={table_option_1} />
				<Modal title={this.state.type === 'add' ? '添加模块' : '编辑模块'}
					visible={this.state.visible}
					onOk={this.handleOk.bind(this)}
					onCancel={this.handleCancel.bind(this)}
					confirmLoading={this.state.confirmLoading}
				>
					<ul className="ul-edit">
						<li>
							<label>模块参数</label>
							<Input />
						</li>
						<li>
							<label>模块名称</label>
							<Input />
						</li>
						<li>
							<label>URL</label>
							<Input />
						</li>
					</ul>
				</Modal>
			</div>
		);
	}

}

export default WarnModule;