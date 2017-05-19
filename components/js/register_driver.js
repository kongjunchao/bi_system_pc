/**
 * @author JUNCHAO KONG
 * @date 2016-10-19
 * @description 注册司机模块
 */

import React from 'react';
import ReactDom from 'react-dom';
import Echarts from './common/echarts.js';
import TableData from './common/table_data.js';
import moment from 'moment';
import { Input, Button, Select, DatePicker, Radio, Checkbox, InputNumber, Collapse } from 'antd';
const Option = Select.Option;
const RangePicker = DatePicker.RangePicker;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const CheckboxGroup = Checkbox.Group;
const Panel = Collapse.Panel;
import SelectCity from './common/select_city.js'

const checkbox_2 = [
	{
		label : '社会车辆',
		value : '1'
	},
	{
		label : '品牌专车',
		value : '2'
	},
	{
		label : '易人易车',
		value : '3'
	},
	{
		label : '长包车',
		value : '4'
	},
	{
		label : '搭车',
		value : '5'
	}
];

const table_option_1 = {
	title : '注册司机报表',
	columns : [
		{
			title : '订单编号',
			dataIndex : 'a',
			key : 'a'
		},
		{
			title : '城市',
			dataIndex : 'b',
			key : 'b'
		},
		{
			title : '评价类型',
			dataIndex : 'c',
			key : 'c'
		},
		{
			title : '下单渠道',
			dataIndex : 'd',
			key : 'd'
		},
		{
			title : '下单设备号',
			dataIndex : 'e',
			key : 'e'
		},
		{
			title : '下单时间',
			dataIndex : 'f',
			key : 'f'
		},
		{
			title : '订车人ID',
			dataIndex : 'g',
			key : 'g'
		},
		{
			title : '手机号归属地',
			dataIndex : 'h',
			key : 'h'
		},
		{
			title : '是否ASAP',
			dataIndex : 'i',
			key : 'i'
		},
		{
			title : '开始时间',
			dataIndex : 'j',
			key : 'j'
		},
		{
			title : '结束时间',
			dataIndex : 'k',
			key : 'k'
		},
		{
			title : '付款状态',
			dataIndex : 'l',
			key : 'l'
		}
	],
	url : './components/data/test_data_1.json',
	source : []
};

class RegisterDriver extends React.Component{
	
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
					车源 > 注册司机
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
				<div className="collapse-box">
					<Collapse>
						<Panel header="筛选" key="1">
							<ul className="ul-3">
								<li>
									<span className="span-1">是否绑定</span>
									<RadioGroup defaultValue="1">
										<RadioButton value="1">全部</RadioButton>
										<RadioButton value="2">是</RadioButton>
										<RadioButton value="3">否</RadioButton>
									</RadioGroup>
								</li>
								<li>
									<span className="span-1">司机类型</span>
									<CheckboxGroup options={checkbox_2} />
								</li>
								<li>
									<span className="span-1">激活日期</span>
									<RangePicker 
										style = {{width:200}}
										onChange = {this.selectDate.bind(this)}
										defaultValue = {[moment().subtract(7, 'days'), moment().subtract(1, 'days')]} 
									/>
								</li>
							</ul>
						</Panel>
					</Collapse>
					<Button type="primary">搜索</Button>
				</div>
				<TableData tableOptions={table_option_1} params={this.state.params} />
			</div>
		);
	}

}

export default RegisterDriver;