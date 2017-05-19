/**
 * @author JUNCHAO KONG
 * @date 2016-10-19
 * @description 周报详情模块
 */

import React from 'react';
import ReactDom from 'react-dom';
import TableData from './common/table_data.js';
import moment from 'moment';
import { Input, Button, Select, DatePicker } from 'antd';
const Option = Select.Option;
const RangePicker = DatePicker.RangePicker;

const table_option_1 = {
	title : '周报列表',
	columns : [
		{
			title : '周报名称',
			dataIndex : 'a',
			key : 'a'
		},
		{
			title : '上传人',
			dataIndex : 'b',
			key : 'b'
		},
		{
			title : '上传时间',
			dataIndex : 'c',
			key : 'c'
		},
		{
			title : '操作',
			dataIndex : 'd',
			key : 'd'
		}
	],
	url : './components/data/test_data_1.json',
	source : []
};

class WeekReportDetails extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			params : {
				startDate : moment().subtract(7, 'days').format('YYYY-MM-DD'),
				endDate : moment().subtract(1, 'days').format('YYYY-MM-DD')
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
	
	handleChange(){
		
	}
	
	componentWillMount(){
	}
	
	componentDidMount(){
	}

	render(){
		return (
			<div className="main-box">
				<div className="top-nav">
					周报 > 周报详情
				</div>
				<div className="div-1">
					<RangePicker 
						style = {{width:200}}
						onChange = {this.selectDate.bind(this)}
						defaultValue = {[moment().subtract(7, 'days'), moment().subtract(1, 'days')]} 
					/>
				</div>
				<TableData tableOptions={table_option_1} params={this.state.params} />
			</div>
		);
	}

}

export default WeekReportDetails;