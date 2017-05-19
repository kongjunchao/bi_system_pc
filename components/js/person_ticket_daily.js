/**
 * @author JUNCHAO KONG
 * @date 2016-10-19
 * @description 个人用券监控日报模块
 */

import React from 'react';
import ReactDom from 'react-dom';
import TableData from './common/table_data.js';
import moment from 'moment';
import { Input, Button, DatePicker } from 'antd';
const RangePicker = DatePicker.RangePicker;

const table_option_1 = {
	title : '个人用券监控日报',
	columns : [
		{
			title : '日期',
			dataIndex : 'date',
			key : 'date'
		},
		{
			title : '优惠券ID',
			dataIndex : 'a',
			key : 'a'
		},
		{
			title : '优惠券名称',
			dataIndex : 'b',
			key : 'b'
		},
		{
			title : '发放量',
			dataIndex : 'c',
			key : 'c'
		},
		{
			title : '使用量',
			dataIndex : 'd',
			key : 'd'
		},
		{
			title : '激活用户数',
			dataIndex : 'e',
			key : 'e'
		},
		{
			title : '老用户数',
			dataIndex : 'f',
			key : 'f'
		},
		{
			title : '激活用户订单数',
			dataIndex : 'g',
			key : 'g'
		},
		{
			title : '老用户订单数',
			dataIndex : 'h',
			key : 'h'
		},
		{
			title : '激活用户收入',
			dataIndex : 'i',
			key : 'i'
		},
		{
			title : '老用户收入',
			dataIndex : 'j',
			key : 'j'
		},
		{
			title : '激活用户成本',
			dataIndex : 'q',
			key : 'q'
		},
		{
			title : '老用户成本',
			dataIndex : 'l',
			key : 'l'
		},
		{
			title : '激活用户实际优惠',
			dataIndex : 'm',
			key : 'm'
		},
		{
			title : '老用户实际优惠',
			dataIndex : 'n',
			key : 'n'
		}
	],
	url : './components/data/test_data_1.json',
	source : []
};

class PersonTicketDaily extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			params : {
				startDate : moment().subtract(7, 'days').format('YYYY-MM-DD'),
				endDate : moment().subtract(1, 'days').format('YYYY-MM-DD'),
				ticket : '',
				city : this.props.city
			}
		}
	}
	
	//选择日期
	selectDate(dates, dateStrings){
		console.log(dateStrings[0] + ' ' + dateStrings[1]);
		if(dateStrings[0] === '' && dateStrings[1] === ''){
			return;
		}
		var params = {};
		for(let k in this.state.params){
			params[k] = this.state.params[k];
		}
		params.startDate = dateStrings[0];
		params.endDate = dateStrings[1];
		this.setState({
			params : params
		})
	}
	
	componentWillMount(){
	}
	
	componentDidMount(){
	}
	
	componentWillReceiveProps(newProps){
		if(this.props.city !== newProps.city){
			var params = {};
			for(let k in this.state.params){
				params[k] = this.state.params[k];
			}
			params.city = newProps.city;
			this.setState({
				params : params
			})
		}
	}

	render(){
		return (
			<div className="main-box">
				<div className="top-nav">
					用户 > 个人用券监控日报
				</div>
				<div className="div-1">
					<RangePicker 
						style = {{width:200}}
						onChange = {this.selectDate.bind(this)}
						defaultValue = {[moment().subtract(7, 'days'), moment().subtract(1, 'days')]} 
					/>
					<span className="span-1">优惠券ID</span>
					<Input placeholder="多个请用逗号隔开" />
					<Button type="primary">搜索</Button>
				</div>
				<TableData tableOptions={table_option_1} params={this.state.params} />
			</div>
		);
	}

}

export default PersonTicketDaily;