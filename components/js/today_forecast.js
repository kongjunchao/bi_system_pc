/**
 * @author JUNCHAO KONG
 * @date 2016-10-19
 * @description 今日预测模块
 */

import React from 'react';
import ReactDom from 'react-dom';
import Echarts from './common/echarts.js';
import '../css/today_forecast.scss';

class TodayForecast extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			option_1 : {},
			option_2 : {},
			option_3 : {},
			option_4 : {},
			option_5 : {},
			option_6 : {}
		}
	}
	
	componentWillMount(){
		var timeVal = [],
			data_1 = [],	//有效订单数
			data_2 = [],	//
			data_3 = [],	//
			data_4 = [],	//派单成功率
			data_5 = [],	//
			data_6 = [],	//
			data_7 = [],	//完成订单
			data_8 = [],	//
			data_9 = [],	//
			data_10 = [],	//充值金额
			data_11 = [],	//
			data_12 = [],	//
			data_13 = [],	//注册用户
			data_14 = [],	//
			data_15 = [],	//
			data_16 = [],	//激活用户
			data_17 = [],	//
			data_18 = [];	//
		function getRandomNum(min, max){
			return parseInt(Math.random() * (max - min + 1) + min, 10);
		}
		//时间和数据（用于测试）
		for(let i = 0; i < 24; i++){
			timeVal[i] = i;
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
			data_13[i] = getRandomNum(0, 10000);
			data_14[i] = getRandomNum(0, 10000);
			data_15[i] = getRandomNum(0, 10000);
			data_16[i] = getRandomNum(0, 10000);
			data_17[i] = getRandomNum(0, 10000);
			data_18[i] = getRandomNum(0, 10000);
		}
		var option_1 = {
			title : '有效订单',
			selectedMode : 'true',
			xAxis : {
				name : '时间',
				data : timeVal
			},
			yAxis : {
				name : ''
			},
			series : [
				{
					name : '上周同一日',
					data : data_1
				},
				{
					name : '昨日',
					data : data_2
				},
				{
					name : '今日',
					data : data_3
				}
			]
		},
		option_2 = {
			title : '派单成功率',
			selectedMode : 'true',
			xAxis : {
				name : '时间',
				data : timeVal
			},
			yAxis : {
				name : ''
			},
			series : [
				{
					name : '上周同一日',
					data : data_4
				},
				{
					name : '昨日',
					data : data_5
				},
				{
					name : '今日',
					data : data_6
				}
			]
		},
		option_3 = {
			title : '完成订单',
			selectedMode : 'true',
			xAxis : {
				name : '时间',
				data : timeVal
			},
			yAxis : {
				name : ''
			},
			series : [
				{
					name : '上周同一日',
					data : data_7
				},
				{
					name : '昨日',
					data : data_8
				},
				{
					name : '今日',
					data : data_9
				}
			]
		},
		option_4 = {
			title : '充值金额（万）',
			selectedMode : 'true',
			xAxis : {
				name : '时间',
				data : timeVal
			},
			yAxis : {
				name : ''
			},
			series : [
				{
					name : '上周同一日',
					data : data_10
				},
				{
					name : '昨日',
					data : data_11
				},
				{
					name : '今日',
					data : data_12
				}
			]
		},
		option_5 = {
			title : '注册用户',
			selectedMode : 'true',
			xAxis : {
				name : '时间',
				data : timeVal
			},
			yAxis : {
				name : ''
			},
			series : [
				{
					name : '上周同一日',
					data : data_13
				},
				{
					name : '昨日',
					data : data_14
				},
				{
					name : '今日',
					data : data_15
				}
			]
		},
		option_6 = {
			title : '激活用户',
			selectedMode : 'true',
			xAxis : {
				name : '时间',
				data : timeVal
			},
			yAxis : {
				name : ''
			},
			series : [
				{
					name : '上周同一日',
					data : data_16
				},
				{
					name : '昨日',
					data : data_17
				},
				{
					name : '今日',
					data : data_18
				}
			]
		};
		this.setState({
			option_1 : option_1,
			option_2 : option_2,
			option_3 : option_3,
			option_4 : option_4,
			option_5 : option_5,
			option_6 : option_6
		})
	}

	render(){
		return (
			<div className="main-box">
				<div className="top-nav">
					报表 > 今日预测
				</div>
				<div className="div-2">
					<ul>
						<li><h2>有效订单</h2><p>76567845</p></li>
						<li><h2>派单成功率</h2><p>76567845</p></li>
						<li><h2>完成订单</h2><p>76567845</p></li>
						<li><h2>充值金额（万）</h2><p>76567845</p></li>
						<li><h2>注册用户</h2><p>76567845</p></li>
						<li><h2>激活用户</h2><p>76567845</p></li>
					</ul>
				</div>
				<div className="table-1">
					<table>
						<tbody>
							<tr>
								<td></td>
								<td>有效订单</td>
								<td>派单成功率</td>
								<td>完成订单</td>
								<td>充值金额（万）</td>
								<td>注册用户</td>
								<td>激活用户</td>
							</tr>
							<tr>
								<td>今日预计</td>
								<td>723</td>
								<td>723</td>
								<td>723</td>
								<td>723</td>
								<td>723</td>
								<td>723</td>
							</tr>
							<tr>
								<td>昨日实时</td>
								<td>723</td>
								<td>723</td>
								<td>723</td>
								<td>723</td>
								<td>723</td>
								<td>723</td>
							</tr>
							<tr>
								<td>昨日累计</td>
								<td>723</td>
								<td>723</td>
								<td>723</td>
								<td>723</td>
								<td>723</td>
								<td>723</td>
							</tr>
						</tbody>
					</table>
				</div>
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
					<div className="chart-div">
						<Echarts id="chart_5" option={this.state.option_5} />
					</div>
					<div className="chart-div">
						<Echarts id="chart_6" option={this.state.option_6} />
					</div>
				</div>
			</div>
		);
	}

}

export default TodayForecast;