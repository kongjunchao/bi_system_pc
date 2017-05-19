/**
 * @author JUNCHAO KONG
 * @date 2016-10-19
 * @description 车源分析模块
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
			title : '城市',
			dataIndex : 'a',
			key : 'a'
		},
		{
			title : '注册司机数',
			dataIndex : 'b',
			key : 'b'
		},
		{
			title : '激活司机数',
			dataIndex : 'c',
			key : 'c'
		},
		{
			title : '在线司机数',
			dataIndex : 'd',
			key : 'd'
		},
		{
			title : '接单司机数',
			dataIndex : 'e',
			key : 'e'
		},
		{
			title : '活跃司机数',
			dataIndex : 'f',
			key : 'f'
		},
		{
			title : '接单率',
			dataIndex : 'g',
			key : 'g'
		},
		{
			title : '活跃率',
			dataIndex : 'h',
			key : 'h'
		}
	],
	url : './components/data/test_data_1.json',
	source : []
};

class CarAnalysis extends React.Component{
	
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
		var that = this;
		//fetch发送GET请求
		fetch('./components/data/test_data_8.json').then(function(res){
			if(res.ok){
				res.json().then(function(data){
					var xData = [],
						yData = [];
					for(let i = 0, len = data.length; i < len; i++){
						xData.push(data[i].date);
						yData.push(data[i].value);
					}
					var chart_option = {
						xAxis : {
							name : '日期',
							data : xData
						},
						yAxis : {
							name : ''
						},
						series : [
							{
								name : '注册司机数',
								data : yData
							},
							{
								name : '加盟司机数',
								data : yData
							},
							{
								name : '激活司机数',
								data : yData
							},
							{
								name : '派单司机数',
								data : yData
							},
							{
								name : '接单司机数',
								data : yData
							},
							{
								name : '活跃司机数',
								data : yData
							}
						]
					};
					that.setState({
						chart_option : chart_option
					})
				})
			}else if(res.status === 401){
				console.log('请求失败');
			}
		}, function(e){
			console.log('请求失败');
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
					车源 > 车源分析
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

export default CarAnalysis;