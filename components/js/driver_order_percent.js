/**
 * @author JUNCHAO KONG
 * @date 2016-10-19
 * @description 司机接单率模块
 */

import React from 'react';
import ReactDom from 'react-dom';
import TableData from './common/table_data.js';
import moment from 'moment';
import { Input, Button, Select, DatePicker } from 'antd';
const Option = Select.Option;
const RangePicker = DatePicker.RangePicker;
import SelectCity from './common/select_city.js'

const table_option_1 = {
	title : '司机接单率报表',
	columns : [
		{
			title : '司机姓名',
			dataIndex : 'a',
			key : 'a'
		},
		{
			title : '司机ID',
			dataIndex : 'b',
			key : 'b'
		},
		{
			title : '城市',
			dataIndex : 'c',
			key : 'c'
		},
		{
			title : '租赁公司',
			dataIndex : 'd',
			key : 'd'
		},
		{
			title : '车牌号',
			dataIndex : 'e',
			key : 'e'
		},
		{
			title : '车辆级别',
			dataIndex : 'f',
			key : 'f'
		},
		{
			title : '车型',
			dataIndex : 'g',
			key : 'g',
			width : 100
		},
		{
			title : '派单数',
			dataIndex : 'h',
			key : 'h',
			width : 100
		},
		{
			title : '接单数',
			dataIndex : 'i',
			key : 'i',
			width : 100
		},
		{
			title : '接单成功数',
			dataIndex : 'j',
			key : 'j',
			width : 100
		},
		{
			title : '接单率',
			dataIndex : 'k',
			key : 'k',
			width : 100
		},
		{
			title : '接单成功率',
			dataIndex : 'l',
			key : 'l',
			width : 100
		},
		{
			title : 'ASAP派单数',
			dataIndex : 'm',
			key : 'm',
			width : 100
		},
		{
			title : 'ASAP接单数',
			dataIndex : 'n',
			key : 'n',
			width : 100
		},
		{
			title : 'ASAP接单成功数',
			dataIndex : 'o',
			key : 'o',
			width : 100
		},
		{
			title : 'ASAP接单率',
			dataIndex : 'p',
			key : 'p',
			width : 100
		}
	],
	url : './components/data/test_data_1.json',
	source : []
};

class DriverOrderPercent extends React.Component{
	
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
					派单 > 司机接单率
				</div>
				<div className="div-1">
					<RangePicker 
						style = {{width:200}}
						onChange = {this.selectDate.bind(this)}
						defaultValue = {[moment().subtract(7, 'days'), moment().subtract(1, 'days')]} 
					/>
					<span className="span-1">城市</span>
					<SelectCity city={this.state.params.city} />
				</div>
				<TableData tableOptions={table_option_1} params={this.state.params} />
			</div>
		);
	}

}

export default DriverOrderPercent;