/**
 * @author JUNCHAO KONG
 * @date 2016-10-19
 * @description 邮件管理系统-模板管理模块
 */

import React from 'react';
import ReactDom from 'react-dom';
import TableData from './common/table_data.js';
import moment from 'moment';
import { Input, Button, Popconfirm, message, Modal } from 'antd';

function confirmDelete(){
	message.success('删除成功');
}

const table_option_1 = {
	title : '模板管理',
	columns : [
		{
			title : '模板ID',
			dataIndex : 'a',
			key : 'a'
		},
		{
			title : '标题',
			dataIndex : 'b',
			key : 'b'
		},
		{
			title : '路径',
			dataIndex : 'c',
			key : 'c'
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

class MailManagementTemplate extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			visible : false,
			confirmLoading : false
		}
	}
	
	handleChange(){
	}
	
	showModal(){
		this.setState({
			visible : true
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
		return (
			<div className="main-box">
				<div className="top-nav">
					工具 > 邮件管理系统 > 模板管理
				</div>
				<div className="div-1">
					<Button type="primary" onClick={this.showModal.bind(this)}>添加模板</Button>
				</div>
				<TableData tableOptions={table_option_1} params={this.state.params} />
				<Modal title='添加模板'
					visible={this.state.visible}
					onOk={this.handleOk.bind(this)}
					onCancel={this.handleCancel.bind(this)}
					confirmLoading={this.state.confirmLoading}
				>
					<ul className="ul-edit">
						<li>
							<label>模板标题</label>
							<Input />
						</li>
						<li>
							<label>模板路径</label>
							<Input />
						</li>
						<li>
							<label>效果预览</label>
							<Input />
						</li>
						<li>
							<label>参数说明</label>
							<Input type="textarea" rows={4} />
						</li>
					</ul>
				</Modal>
			</div>
		);
	}

}

export default MailManagementTemplate;