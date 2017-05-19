/**
 * @author JUNCHAO KONG
 * @date 2016-10-19
 * @description 消费活跃用户模块
 */

import React from 'react';
import ReactDom from 'react-dom';
import Echarts from './common/echarts.js';
import TableData from './common/table_data.js';
import moment from 'moment';
import { DatePicker } from 'antd';
const RangePicker = DatePicker.RangePicker;

const table_option_1 = {
	title : '',
	columns : [
		{
			title : '注册来源',
			dataIndex : 'date',
			key : 'date'
		},
		{
			title : '新用户数',
			dataIndex : 'a',
			key : 'a'
		},
		{
			title : '活跃用户数',
			dataIndex : 'b',
			key : 'b'
		},
		{
			title : '新用户人均订单',
			dataIndex : 'c',
			key : 'c'
		},
		{
			title : '新用户单均金额',
			dataIndex : 'd',
			key : 'd'
		},
		{
			title : '新用户单均优惠',
			dataIndex : 'e',
			key : 'e'
		},
		{
			title : '人均订单数',
			dataIndex : 'f',
			key : 'f'
		},
		{
			title : '单均金额',
			dataIndex : 'g',
			key : 'g'
		},
		{
			title : '单均优惠',
			dataIndex : 'h',
			key : 'h'
		}
	],
	url : './components/data/test_data_1.json',
	source : []
};

class ConsumerActiveUser extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			params : {
				startDate : moment().subtract(7, 'days').format('YYYY-MM-DD'),
				endDate : moment().subtract(1, 'days').format('YYYY-MM-DD'),
				city : this.props.city
			},
			chart_option : {}
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
		var dateVal = [],
			data_1 = [],	//新用户
			data_2 = [],	//活跃用户
			data_3 = [],	//新用户人均订单
			data_4 = [],	//新用户单均金额
			data_5 = [],	//新用户单均优惠
			data_6 = [],	//人均订单
			data_7 = [],	//单均金额
			data_8 = [];	//单均优惠
		function getRandomNum(min, max){
			return parseInt(Math.random() * (max - min + 1) + min, 10);
		}
		//日期和数据（用于测试）
		for(let i = 0; i < 14; i++){
			dateVal[i] = '9-' + (i + 1);
			data_1[i] = getRandomNum(0, 10000);
			data_2[i] = getRandomNum(0, 10000);
			data_3[i] = getRandomNum(0, 10000);
			data_4[i] = getRandomNum(0, 10000);
			data_5[i] = getRandomNum(0, 10000);
			data_6[i] = getRandomNum(0, 10000);
			data_7[i] = getRandomNum(0, 10000);
			data_8[i] = getRandomNum(0, 10000);
		}
		var chart_option = {
			xAxis : {
				name : '日期',
				data : dateVal
			},
			yAxis : {
				name : ''
			},
			series : [
				{
					name : '新用户',
					data : data_1
				},
				{
					name : '活跃用户',
					data : data_2
				},
				{
					name : '新用户人均订单',
					data : data_3
				},
				{
					name : '新用户单均金额',
					data : data_4
				},
				{
					name : '新用户单均优惠',
					data : data_5
				},
				{
					name : '人均订单',
					data : data_6
				},
				{
					name : '单均金额',
					data : data_7
				},
				{
					name : '单均优惠',
					data : data_8
				}
			]
		};
		this.setState({
			chart_option : chart_option
		})
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
					用户 > 消费活跃用户
				</div>
				<div className="div-1">
					<RangePicker 
						style = {{width:200}}
						onChange = {this.selectDate.bind(this)}
						defaultValue = {[moment().subtract(7, 'days'), moment().subtract(1, 'days')]} 
					/>
				</div>
				<div style={{width:"100%", height:"380px", marginTop:"40px"}}>
					<Echarts id="chart_1" option={this.state.chart_option} />
				</div>
				<TableData tableOptions={table_option_1} params={this.state.params} />
			</div>
		);
	}

}

export default ConsumerActiveUser;