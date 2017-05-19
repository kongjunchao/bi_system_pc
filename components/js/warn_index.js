/**
 * @author JUNCHAO KONG
 * @date 2016-10-19
 * @description 预警管理系统-预警指标
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

class WarnIndex extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			visible : false,
			type : 'add',		//add or edit
			confirmLoading : false,
			value : "百分比"
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
			title : '预警指标',
			columns : [
				{
					title : 'ID',
					dataIndex : 'a',
					key : 'a'
				},
				{
					title : '模块名称',
					dataIndex : 'b',
					key : 'b'
				},
				{
					title : '指标参数',
					dataIndex : 'c',
					key : 'c'
				},
				{
					title : '指标名称',
					dataIndex : 'd',
					key : 'd'
				},
				{
					title : '阀值',
					dataIndex : 'e',
					key : 'e'
				},
				{
					title : '城市',
					dataIndex : 'f',
					key : 'f'
				},
				{
					title : '状态',
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
					工具 > 预警管理系统 > 预警指标
				</div>
				<div className="div-1">
					<span className="span-1">预警模块</span>
					<Select 
						style = {{width:160}}
						onChange = {this.handleChange.bind(this)}
						defaultValue = "全部"
					>
						<Option value="全部">全部</Option>
					</Select>
					<span className="span-1">指标名称</span>
					<Input />
					<Button type="primary">搜索</Button>
					<Button type="primary" onClick={this.showModal.bind(this, 'add')}>添加预警指标</Button>
				</div>
				<TableData tableOptions={table_option_1} params={this.state.params} />
				<Modal title={this.state.type === 'add' ? '添加指标' : '编辑指标'}
					visible={this.state.visible}
					onOk={this.handleOk.bind(this)}
					onCancel={this.handleCancel.bind(this)}
					confirmLoading={this.state.confirmLoading}
				>
					<ul className="ul-edit">
						<li>
							<label>所属模块</label>
							<Select 
								style = {{width:100}}
								defaultValue = "1"
							>
								<Option value="1">全部</Option>
							</Select>
						</li>
						<li>
							<label>指标参数</label>
							<Input />
						</li>
						<li>
							<label>指标名称</label>
							<Input />
						</li>
						<li>
							<label>阀值类型</label>
							<RadioGroup value={this.state.value} onChange={this.handleChange.bind(this)}>
								<Radio value="百分比">百分比</Radio>
								<Radio value="数值">数值</Radio>
							</RadioGroup>
						</li>
						<li>
							<label>阀值</label>
							<Input />
						</li>
					</ul>
				</Modal>
			</div>
		);
	}

}

export default WarnIndex;