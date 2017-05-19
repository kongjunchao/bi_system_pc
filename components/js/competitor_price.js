/**
 * @author JUNCHAO KONG
 * @date 2016-10-19
 * @description 竞品价格模块
 */

import React from 'react';
import ReactDom from 'react-dom';
import Echarts from './common/echarts.js';
import TableData from './common/table_data.js';
import moment from 'moment';
import { Input, Button, Select, DatePicker, Radio, Checkbox, Collapse } from 'antd';
const Option = Select.Option;
const RangePicker = DatePicker.RangePicker;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const CheckboxGroup = Checkbox.Group;
const Panel = Collapse.Panel;
import SelectCity from './common/select_city.js';
import SelectCar from './common/select_car.js';

const checkbox_2 = [
	{
		label : '易到用车',
		value : '1'
	},
	{
		label : '滴滴',
		value : '2'
	},
	{
		label : 'Uber',
		value : '3'
	},
	{
		label : '神州专车',
		value : '4'
	}
];

const table_option_1 = {
	title : '',
	columns : [
		{
			title : '日期',
			dataIndex : 'date',
			key : 'date'
		},
		{
			title : '对象',
			dataIndex : 'a',
			key : 'a'
		},
		{
			title : '起步/套餐价',
			dataIndex : 'b',
			key : 'b'
		},
		{
			title : '时长费',
			dataIndex : 'c',
			key : 'c'
		},
		{
			title : '里程费',
			dataIndex : 'd',
			key : 'd'
		},
		{
			title : '最低消费',
			dataIndex : 'e',
			key : 'e'
		},
		{
			title : '长途节点',
			dataIndex : 'f',
			key : 'f'
		},
		{
			title : '长途费用',
			dataIndex : 'g',
			key : 'g'
		},
		{
			title : '包含时长',
			dataIndex : 'h',
			key : 'h'
		},
		{
			title : '包含里程',
			dataIndex : 'i',
			key : 'i'
		}
	],
	url : './components/data/test_data_1.json',
	source : []
};

class CompetitorPrice extends React.Component{
	
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
					竞品 > 竞品价格
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
									<span className="span-1">竞品对象</span>
									<CheckboxGroup options={checkbox_2} />
								</li>
								<li>
									<span className="span-1">车辆级别</span>
									<SelectCar />
									<span className="span-1">筛选</span>
									<RadioGroup defaultValue="1">
										<RadioButton value="1">全部</RadioButton>
										<RadioButton value="2">价格有变更</RadioButton>
										<RadioButton value="3">价格未变更</RadioButton>
									</RadioGroup>
								</li>
								<li>
									<span className="span-1">提示</span>
									<p style={{display:"inline-block", marginLeft:"25px", color:"#ffa500"}}>滴滴调价城市-南宁</p>
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

export default CompetitorPrice;