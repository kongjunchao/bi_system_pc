/**
 * @author JUNCHAO KONG
 * @date 2016-10-19
 * @description 访问活跃用户模块
 */

import React from 'react';
import ReactDom from 'react-dom';
import Echarts from './common/echarts.js';
import TableData from './common/table_data.js';
import moment from 'moment';
import { Button, Select, DatePicker } from 'antd';
const Option = Select.Option;
const RangePicker = DatePicker.RangePicker;

const table_option_1 = {
	title : '活跃用户概况',
	columns : [
		{
			title : '昨日活跃用户',
			dataIndex : 'a',
			key : 'a'
		},
		{
			title : '过去7日活跃用户',
			dataIndex : 'b',
			key : 'b'
		},
		{
			title : '昨日活跃 / 过去7日',
			dataIndex : 'c',
			key : 'c'
		},
		{
			title : '过去30日活跃用户',
			dataIndex : 'd',
			key : 'd'
		},
		{
			title : '昨日活跃 / 过去30日',
			dataIndex : 'e',
			key : 'e'
		},
		{
			title : '安装总量',
			dataIndex : 'f',
			key : 'f'
		},
		{
			title : '昨日活跃 / 安装总量',
			dataIndex : 'g',
			key : 'g'
		}
	],
	url : './components/data/test_data_1.json',
	source : []
};

const table_option_2 = {
	title : '',
	columns : [
		{
			title : '日期',
			dataIndex : 'date',
			key : 'date'
		},
		{
			title : '活跃用户数',
			dataIndex : 'a',
			key : 'a'
		},
		{
			title : '活跃用户数占比',
			dataIndex : 'b',
			key : 'b'
		}
	],
	url : './components/data/test_data_1.json',
	source : []
};

class AccessActiveUser extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			params : {
				startDate : moment().subtract(7, 'days').format('YYYY-MM-DD'),
				endDate : moment().subtract(1, 'days').format('YYYY-MM-DD'),
				city : this.props.city
			},
			chart_option : {},
			index : 0		//默认显示维度为日
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
	
	handleChange(){
		
	}
	
	//改变图表显示维度
	changeChartType(e){
		var type = parseInt(e.target.getAttribute('data-type'));
		if(!type || type - 1 === this.state.index){
			return;
		}
		e.target.parentNode.childNodes[this.state.index].className = '';
		e.target.className = 'active';
		this.setState({
			index : type - 1
		})
		this.getChartOption(type);
	}
	
	getChartOption(type){
		
	}
	
	componentWillMount(){
		var dateVal = [],
			data_1 = [];	//访问活跃用户
		function getRandomNum(min, max){
			return parseInt(Math.random() * (max - min + 1) + min, 10);
		}
		//日期和数据（用于测试）
		for(let i = 0; i < 14; i++){
			dateVal[i] = '9-' + (i + 1);
			data_1[i] = getRandomNum(0, 10000);
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
					name : '访问活跃用户',
					data : data_1
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
					用户 > 访问活跃用户
				</div>
				<div className="div-1">
					<RangePicker 
						style = {{width:200}}
						onChange = {this.selectDate.bind(this)}
						defaultValue = {[moment().subtract(7, 'days'), moment().subtract(1, 'days')]} 
					/>
					<span className="span-1">操作系统</span>
					<Select 
						style = {{width:100}}
						onChange = {this.handleChange.bind(this)}
						defaultValue = "全部"
					>
						<Option value="全部">全部</Option>
						<Option value="Android">Android</Option>
						<Option value="IOS">IOS</Option>
					</Select>
					<span className="span-1">版本号</span>
					<Select 
						style = {{width:100}}
						onChange = {this.handleChange.bind(this)}
						defaultValue = "全部"
					>
						<Option value="全部">全部</Option>
					</Select>
					<Button type="primary">搜索</Button>
				</div>
				<div style={{width:"100%", height:"380px", marginTop:"20px", position:"relative"}}>
					<div className="div-type" onClick={this.changeChartType.bind(this)}>
						<span data-type="1" className="active">日</span>
						<span data-type="2">周</span>
						<span data-type="3">月</span>
						<span data-type="4">小时</span>
						<span data-type="5">操作系统</span>
						<span data-type="6">版本号</span>
					</div>
					<Echarts id="chart_1" option={this.state.chart_option} />
				</div>
				<TableData tableOptions={table_option_1} params={this.state.params} />
				<TableData tableOptions={table_option_2} params={this.state.params} />
			</div>
		);
	}

}

export default AccessActiveUser;