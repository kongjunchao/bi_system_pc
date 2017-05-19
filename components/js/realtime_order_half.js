/**
 * @author JUNCHAO KONG
 * @date 2016-10-19
 * @description 实时派单半小时模块
 */

import React from 'react';
import ReactDom from 'react-dom';
import Echarts from './common/echarts.js';
import moment from 'moment';
import { Button, Select, DatePicker } from 'antd';
const Option = Select.Option;
const RangePicker = DatePicker.RangePicker;
import SelectCity from './common/select_city.js';
import SelectProduct from './common/select_product.js';

class RealtimeOrderHalf extends React.Component{
	
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
	selectDate(date, dateString){
		console.log(dateString);
		if(dateString === ''){
			return;
		}
		var params = {};
		for(let k in this.state.params){
			params[k] = this.state.params[k];
		}
		params.startDate = moment(dateString).subtract(7, 'days').format('YYYY-MM-DD');
		params.endDate = dateString;
		this.setState({
			params : params
		})
	}
	
	handleChange(){
		
	}
	
	getChartOption(type){
		
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
					派单 > 实时派单半小时
				</div>
				<div className="div-1">
					<DatePicker 
						style = {{width:'150px', lineHeight:'0', marginTop:'4px'}}
						onChange = {this.selectDate.bind(this)}
						defaultValue = {moment().subtract(1, 'days')} 
					/>
					<span className="span-1">城市</span>
					<SelectCity city={this.state.params.city} />
					<span className="span-1">产品</span>
					<SelectProduct />
					<Button type="primary">搜索</Button>
				</div>
				<div style={{width:"100%", height:"380px", marginTop:"20px", position:"relative"}}>
					<div className="div-type" onClick={this.changeChartType.bind(this)}>
						<span data-type="1" className="active">派单成功率</span>
						<span data-type="2">派单成功数</span>
						<span data-type="3">派单失败数</span>
					</div>
					<Echarts id="chart_1" option={this.state.chart_option} />
				</div>
			</div>
		);
	}

}

export default RealtimeOrderHalf;