/**
 * @author JUNCHAO KONG
 * @date 2016-10-19
 * @description 企业账户信息模块
 */

import React from 'react';
import ReactDom from 'react-dom';
import TableData from './common/table_data.js';
import moment from 'moment';
import { DatePicker } from 'antd';
const RangePicker = DatePicker.RangePicker;

const table_option_1 = {
	title : '企业账户信息',
	columns : [
		{
			title : '企业名称',
			dataIndex : 'a',
			key : 'a'
		},
		{
			title : '创建人',
			dataIndex : 'b',
			key : 'b'
		},
		{
			title : '创建人电话',
			dataIndex : 'c',
			key : 'c'
		},
		{
			title : '总充值金额',
			dataIndex : 'd',
			key : 'd'
		},
		{
			title : '当期充值金额',
			dataIndex : 'e',
			key : 'e'
		},
		{
			title : '当期账户充值金额',
			dataIndex : 'f',
			key : 'f'
		},
		{
			title : '充值日期',
			dataIndex : 'g',
			key : 'g'
		},
		{
			title : '行业',
			dataIndex : 'h',
			key : 'h'
		},
		{
			title : '账户余额',
			dataIndex : 'i',
			key : 'i'
		},
		{
			title : '发票额度',
			dataIndex : 'j',
			key : 'j'
		},
		{
			title : '客户经理',
			dataIndex : 'k',
			key : 'k'
		},
		{
			title : '首次充值金额',
			dataIndex : 'l',
			key : 'l'
		},
		{
			title : '首次充值日期',
			dataIndex : 'm',
			key : 'm'
		},
		{
			title : '城市',
			dataIndex : 'n',
			key : 'n'
		},
	],
	url : './components/data/test_data_1.json',
	source : []
};

class BusinessAccountInfo extends React.Component{
	
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
					财务 > 企业账户信息
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

export default BusinessAccountInfo;