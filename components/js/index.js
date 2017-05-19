/**
 * @author JUNCHAO KONG
 * @date 2016-10-19
 * @description 首页模块
 */

import React from 'react';
import ReactDom from 'react-dom';
import Echarts from './common/echarts.js';
import moment from 'moment';
import { DatePicker } from 'antd';
const RangePicker = DatePicker.RangePicker;
import '../css/index.scss';

class Index extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			params : {
				startDate : moment().subtract(1, 'days').format('YYYY-MM-DD'),
				endDate : moment().subtract(1, 'days').format('YYYY-MM-DD')
			},
			data : [],
			option_1 : {},
			option_2 : {},
			option_3 : {},
			option_4 : {}
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
			data_1 = [],	//完成订单
			data_2 = [],	//充值金额
			data_3 = [],	//派发订单
			data_4 = [],	//派单成功
			data_5 = [],	//派单失败
			data_6 = [],	//派单成功率
			data_7 = [],	//注册用户
			data_8 = [],	//激活用户
			data_9 = [],	//活跃用户
			data_10 = [],	//注册成功司机
			data_11 = [],	//激活司机
			data_12 = [];	//活跃司机
		function getRandomNum(min, max){
			return parseInt(Math.random() * (max - min + 1) + min, 10);
		}
		//日期和数据（用于测试）
		for(let i = 0; i < 7; i++){
			dateVal[i] = '9-' + (i + 1);
			data_1[i] = getRandomNum(0, 10000);
			data_2[i] = getRandomNum(0, 10000);
			data_3[i] = getRandomNum(0, 10000);
			data_4[i] = getRandomNum(0, 10000);
			data_5[i] = getRandomNum(0, 10000);
			data_6[i] = getRandomNum(0, 10000);
			data_7[i] = getRandomNum(0, 10000);
			data_8[i] = getRandomNum(0, 10000);
			data_9[i] = getRandomNum(0, 10000);
			data_10[i] = getRandomNum(0, 10000);
			data_11[i] = getRandomNum(0, 10000);
			data_12[i] = getRandomNum(0, 10000);
		}
		var option_1 = {
			title : '订单',
			xAxis : {
				name : '日期',
				data : dateVal
			},
			yAxis : {
				name : ''
			},
			series : [
				{
					name : '完成订单',
					data : data_1
				},
				{
					name : '充值金额',
					data : data_2
				}
			]
		},
		option_2 = {
			title : '用车需求',
			xAxis : {
				name : '日期',
				data : dateVal
			},
			yAxis : {
				name : ''
			},
			series : [
				{
					name : '派发订单',
					data : data_3
				},
				{
					name : '派单成功',
					data : data_4
				},
				{
					name : '派单失败',
					data : data_5
				},
				{
					name : '派单成功率',
					data : data_6
				}
			]
		},
		option_3 = {
			title : '用户',
			xAxis : {
				name : '日期',
				data : dateVal
			},
			yAxis : {
				name : ''
			},
			series : [
				{
					name : '注册用户',
					data : data_7
				},
				{
					name : '激活用户',
					data : data_8
				},
				{
					name : '活跃用户',
					data : data_9
				}
			]
		},
		option_4 = {
			title : '车源',
			xAxis : {
				name : '日期',
				data : dateVal
			},
			yAxis : {
				name : ''
			},
			series : [
				{
					name : '注册成功司机',
					data : data_10
				},
				{
					name : '激活司机',
					data : data_11
				},
				{
					name : '活跃司机',
					data : data_12
				}
			]
		};
		this.setState({
			option_1 : option_1,
			option_2 : option_2,
			option_3 : option_3,
			option_4 : option_4
		})
	}

	componentDidMount(){
		var data = [
			{
				name : '派发订单',
				number : '19936665',
				float : '13000'
			},
			{
				name : '派单成功',
				number : '19936665',
				float : '13000'
			},
			{
				name : '派单成功率',
				number : '100%',
				float : '16%'
			},
			{
				name : '完成订单',
				number : '19936665',
				float : '13000'
			},
			{
				name : '激活用户',
				number : '19936665',
				float : '13000'
			},
			{
				name : '激活司机',
				number : '19936665',
				float : '13000'
			},
			{
				name : '充值金额',
				number : '19936665',
				float : '13000'
			}
		];
		this.setState({
			data : data
		})
	}

	render(){
		return (
			<div className="main-box">
				<div className="top-nav">
					报表 > 首页
				</div>
				<div className="div-1">
					<span className="span-1">当前城市：{this.props.city}</span>
					<div className="right-box">
						<RangePicker 
							style = {{width:200}}
							onChange = {this.selectDate.bind(this)}
							defaultValue = {[moment().subtract(1, 'days'), moment().subtract(1, 'days')]} 
						/>
					</div>
				</div>
				<ul className="ul-1">
					{
						this.state.data.map(function(data){
							return <li key={data.name}><span>{data.float}</span><h2>{data.number}</h2><p>{data.name}</p></li>
						})
					}
				</ul>
				<div className="chart-box">
					<div className="chart-div">
						<Echarts id="chart_1" option={this.state.option_1} />
					</div>
					<div className="chart-div">
						<Echarts id="chart_2" option={this.state.option_2} />
					</div>
					<div className="chart-div">
						<Echarts id="chart_3" option={this.state.option_3} />
					</div>
					<div className="chart-div">
						<Echarts id="chart_4" option={this.state.option_4} />
					</div>
				</div>
			</div>
		);
	}

}

export default Index;