/**
 * @author JUNCHAO KONG
 * @date 2016-10-19
 * @description 预警管理系统-预警手机号
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

class WarnPhone extends React.Component{
	
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
		const table_option_1 = {
			title : '预警手机号',
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
					title : '手机号',
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

		return (
			<div className="main-box">
				<div className="top-nav">
					工具 > 预警管理系统 > 预警手机号
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
					<span className="span-1">手机号</span>
					<Input />
					<Button type="primary">搜索</Button>
					<Button type="primary">添加</Button>
				</div>
				<TableData tableOptions={table_option_1} />
			</div>
		);
	}

}

export default WarnPhone;