/**
 * @author JUNCHAO KONG
 * @date 2016-10-19
 * @description 部门关键指标-产品部模块
 */

import React from 'react';
import ReactDom from 'react-dom';
import Echarts from './common/echarts.js';
import { Icon } from 'antd';

class ProductService extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			chart_option_1 : {},
			chart_option_2 : {},
			index : [0, 0, 0, 0, 0, 0, 0, 0]			//这里的index[0]=0表示第一个图表的默认维度是0（日）
		}
	}
	
	//改变图表显示维度
	changeChartType(e){
		var index = parseInt(e.target.parentNode.getAttribute('data-index')),	//获取是第几个图表
			type = parseInt(e.target.getAttribute('data-type')),	//获取是第几个维度
			arr = this.state.index.concat();
		if(type === 'undefined' || type === this.state.index[index]){
			return;
		}
		e.target.parentNode.childNodes[this.state.index[index]].className = '';
		e.target.className = 'active';
		arr[index] = type;
		this.setState({
			index : arr
		})
		this.getChartOption(type);
	}
	
	getChartOption(type){
	}
	
	componentWillMount(){
		var dateVal = [],
			data_1 = [],	//派单成功率
			data_2 = [];	//派到时间距
		function getRandomNum(min, max){
			return parseInt(Math.random() * (max - min + 1) + min, 10);
		}
		//日期和数据（用于测试）
		for(let i = 0; i < 14; i++){
			dateVal[i] = '9-' + (i + 1);
			data_1[i] = getRandomNum(0, 10000);
			data_2[i] = getRandomNum(0, 10000);
		}
		var chart_option_1 = {
			xAxis : {
				name : '日期',
				data : dateVal
			},
			yAxis : {
				name : ''
			},
			series : [
				{
					name : '派单成功率',
					data : data_1
				}
			]
		},
		chart_option_2 = {
			xAxis : {
				name : '日期',
				data : dateVal
			},
			yAxis : {
				name : ''
			},
			series : [
				{
					name : '派到时间距',
					data : data_2
				}
			]
		};
		this.setState({
			chart_option_1 : chart_option_1,
			chart_option_2 : chart_option_2
		})
	}
	
	componentDidMount(){
	}

	render(){
		var info = [
			{
				title : '乘客端',
				smallTitle : '7日安装下单率',
				icon : 'user',
				nowVal : '97.00%',
				targetVal : '100%',
				type : ['日', '周', '月'],
				echartId : 'chart_1',
				echartOption : this.state.chart_option_1
			},
			{
				title : '派单成功率',
				smallTitle : '',
				icon : 'smile-o',
				nowVal : '97.00%',
				targetVal : '100%',
				type : ['日', '周', '月'],
				echartId : 'chart_2',
				echartOption : this.state.chart_option_2
			},
			{
				title : '派到时间距',
				smallTitle : 'ASAP订单',
				icon : 'clock-circle-o',
				nowVal : '7.66分钟',
				targetVal : '5分钟',
				type : ['日', '周', '月'],
				echartId : 'chart_3',
				echartOption : this.state.chart_option_2
			},
			{
				title : '司机接单率',
				smallTitle : '',
				icon : 'heart-o',
				nowVal : '97.00%',
				targetVal : '100%',
				type : ['日', '周', '月'],
				echartId : 'chart_4',
				echartOption : this.state.chart_option_2
			},
			{
				title : '接单响应时长',
				smallTitle : '',
				icon : 'exclamation-circle-o',
				nowVal : '7.66分钟',
				targetVal : '5分钟',
				type : ['日', '周', '月'],
				echartId : 'chart_5',
				echartOption : this.state.chart_option_2
			},
			{
				title : '乘客下单时长',
				smallTitle : '',
				icon : 'reload',
				nowVal : '7.66分钟',
				targetVal : '5分钟',
				type : ['日', '周', '月'],
				echartId : 'chart_6',
				echartOption : this.state.chart_option_2
			},
			{
				title : '社会化',
				smallTitle : '充值金额占比',
				icon : 'pay-circle-o',
				nowVal : '7.66分钟',
				targetVal : '5分钟',
				type : ['日', '周', '月'],
				echartId : 'chart_7',
				echartOption : this.state.chart_option_2
			},
			{
				title : '取消率',
				smallTitle : '',
				icon : 'frown-o',
				nowVal : '97.00%',
				targetVal : '100%',
				type : ['日', '周', '月'],
				echartId : 'chart_8',
				echartOption : this.state.chart_option_2
			}
		],
		that = this;
		return (
			<div className="main-box">
				<div className="top-nav">
					部门关键指标 > 产品部
				</div>
				{
					info.map(function(info, index){
						return (
							<div className="div-3" key={info.title}>
								<div className="div-3-left">
									<Icon type={info.icon} />
									<h2>{info.title}<span>{info.smallTitle !== '' ? '（' + info.smallTitle + '）' : ''}</span></h2>
									<p>当前值 : {info.nowVal}</p>
									<p>目标值 : {info.targetVal}</p>
								</div>
								<div className="div-3-right">
									<div className="div-type" data-index={index} onClick={that.changeChartType.bind(that)}>
										{
											info.type.map(function(type, typeIndex){
												return <span key={typeIndex} data-type={typeIndex} className={typeIndex === 0 ? "active" : ""}>{type}</span>
											})
										}
									</div>
									<Echarts id={info.echartId} option={info.echartOption} />
								</div>
							</div>
						)
					})
				}
			</div>
		);
	}

}

export default ProductService;