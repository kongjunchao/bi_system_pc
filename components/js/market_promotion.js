/**
 * @author JUNCHAO KONG
 * @date 2016-10-19
 * @description 市场推广模块
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
			key : 'date',
			render : text => <a href="javascript:void(0);" className="table-a">{text}</a>
		},
		{
			title : '注册用户数',
			dataIndex : 'a',
			key : 'a'
		},
		{
			title : '新用户数',
			dataIndex : 'b',
			key : 'b'
		},
		{
			title : '注册当日激活用户数',
			dataIndex : 'c',
			key : 'c'
		}
	],
	source : [
		{
			key : '1',
			name : '注册来源',
			url : './components/data/test_data_1.json'
		},
		{
			key : '2',
			name : '注册平台',
			url : './components/data/test_data_2.json'
		},
		{
			key : '3',
			name : '激活平台',
			url : './components/data/test_data_3.json'
		},
		{
			key : '4',
			name : '注册来源细分',
			url : './components/data/test_data_4.json'
		}
	]
};

class MarketPromotion extends React.Component{
	
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
			data_1 = [],	//注册用户数
			data_2 = [],	//新用户数
			data_3 = [];	//注册当日激活用户数
		function getRandomNum(min, max){
			return parseInt(Math.random() * (max - min + 1) + min, 10);
		}
		//日期和数据（用于测试）
		for(let i = 0; i < 14; i++){
			dateVal[i] = '9-' + (i + 1);
			data_1[i] = getRandomNum(0, 10000);
			data_2[i] = getRandomNum(0, 10000);
			data_3[i] = getRandomNum(0, 10000);
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
					name : '注册用户数',
					data : data_1
				},
				{
					name : '新用户数',
					data : data_2
				},
				{
					name : '注册当日激活用户数',
					data : data_3
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
					用户 > 市场推广
				</div>
				<div className="div-1">
					<div className="right-box">
						<RangePicker 
							style = {{width:200}}
							onChange = {this.selectDate.bind(this)}
							defaultValue = {[moment().subtract(1, 'days'), moment().subtract(1, 'days')]} 
						/>
					</div>
				</div>
				<div style={{width:"100%", height:"380px", marginTop:"25px"}}>
					<Echarts id="chart_1" option={this.state.chart_option} />
				</div>
				<TableData tableOptions={table_option_1} params={this.state.params} />
			</div>
		);
	}

}

export default MarketPromotion;