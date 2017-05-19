/**
 * @author JUNCHAO KONG
 * @date 2016-10-19
 * @description 完成订单模块
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
import SelectCity from './common/select_city.js';
import SelectProduct from './common/select_product.js';
import SelectCar from './common/select_car.js';
import '../css/complete_order.scss';

const checkbox_1 = [
	{
		label : '已付款',
		value : '1'
	},
	{
		label : '未付款',
		value : '2'
	},
	{
		label : '部分付款',
		value : '3'
	}
];

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
	title : '完成订单报表',
	columns : [
		{
			title : '订单编号',
			dataIndex : 'a',
			key : 'a',
			width : 100
		},
		{
			title : '城市',
			dataIndex : 'b',
			key : 'b',
			width : 100
		},
		{
			title : '评价类型',
			dataIndex : 'c',
			key : 'c',
			width : 100
		},
		{
			title : '下单渠道',
			dataIndex : 'd',
			key : 'd',
			width : 100
		},
		{
			title : '下单设备号',
			dataIndex : 'e',
			key : 'e',
			width : 100
		},
		{
			title : '下单时间',
			dataIndex : 'f',
			key : 'f',
			width : 100
		},
		{
			title : '订车人ID',
			dataIndex : 'g',
			key : 'g',
			width : 100
		},
		{
			title : '手机号归属地',
			dataIndex : 'h',
			key : 'h',
			width : 100
		},
		{
			title : '是否ASAP',
			dataIndex : 'i',
			key : 'i',
			width : 100
		},
		{
			title : '开始时间',
			dataIndex : 'j',
			key : 'j',
			width : 100
		},
		{
			title : '结束时间',
			dataIndex : 'k',
			key : 'k',
			width : 100
		},
		{
			title : '付款状态',
			dataIndex : 'l',
			key : 'l',
			width : 100
		}
	],
	url : './components/data/test_data_1.json',
	source : []
};

class CompleteOrder extends React.Component{
	
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
					订单 > 完成订单
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
									<span className="span-1">车型</span>
									<SelectCar />
									<span className="span-1">产品</span>
									<SelectProduct />
								</li>
								<li>
									<span className="span-1">是否ASAP</span>
									<RadioGroup defaultValue="1">
										<RadioButton value="1">全部</RadioButton>
										<RadioButton value="2">是</RadioButton>
										<RadioButton value="3">否</RadioButton>
									</RadioGroup>
									<span className="span-1">结算账户</span>
									<RadioGroup defaultValue="1">
										<RadioButton value="1">全部</RadioButton>
										<RadioButton value="2">企业</RadioButton>
										<RadioButton value="3">个人</RadioButton>
									</RadioGroup>
									<span className="span-1">定乘分离</span>
									<RadioGroup defaultValue="1">
										<RadioButton value="1">全部</RadioButton>
										<RadioButton value="2">是</RadioButton>
										<RadioButton value="3">否</RadioButton>
									</RadioGroup>
								</li>
								<li>
									<span className="span-1">订单ID</span>
									<Input placeholder="" />
									<span className="span-1">企业ID</span>
									<Input placeholder="" />
								</li>
								<li>
									<span className="span-1">用户ID</span>
									<Input placeholder="" />
									<span className="span-1">司机ID</span>
									<Input placeholder="" />
									<span className="span-1">优惠券</span>
									<Input placeholder="" />
								</li>
								<li>
									<span className="span-1">付款状态</span>
									<CheckboxGroup options={checkbox_1} />
								</li>
								<li>
									<span className="span-1">车辆类型</span>
									<CheckboxGroup options={checkbox_2} />
								</li>
								<li>
									<span className="span-1">订单原始金额</span>
									<InputNumber /> - <InputNumber />
									<span className="span-1">公里范围</span>
									<InputNumber /> - <InputNumber />
									<span className="span-1">时长范围</span>
									<InputNumber /> - <InputNumber />
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

export default CompleteOrder;