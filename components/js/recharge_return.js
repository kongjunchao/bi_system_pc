/**
 * @author JUNCHAO KONG
 * @date 2016-10-19
 * @description 充值返现模块
 */

import React from 'react';
import ReactDom from 'react-dom';
import TableData from './common/table_data.js';
import moment from 'moment';
import { DatePicker } from 'antd';
const RangePicker = DatePicker.RangePicker;

const table_option_1 = {
	title : '订单数据',
	columns : [
		{
			title : '统计日期',
			dataIndex : 'date',
			key : 'date'
		},
		{
			title : '充值返现订单',
			children : [
				{
					title : '完成订单数',
					dataIndex : 'a',
					key : 'a'
				},
				{
					title : '订单金额',
					dataIndex : 'b',
					key : 'b'
				},
				{
					title : '单均金额',
					dataIndex : 'c',
					key : 'c'
				}
			]
		},
		{
			title : '整体订单',
			children : [
				{
					title : '完成订单数',
					dataIndex : 'd',
					key : 'd'
				},
				{
					title : '订单金额',
					dataIndex : 'e',
					key : 'e'
				},
				{
					title : '单均金额',
					dataIndex : 'f',
					key : 'f'
				}
			]
		},
		{
			title : '充值返现订单（%）',
			children : [
				{
					title : '完成订单数（%）',
					dataIndex : 'g',
					key : 'g'
				},
				{
					title : '订单金额（%）',
					dataIndex : 'h',
					key : 'h'
				}
			]
		}
	],
	url : './components/data/test_data_1.json',
	source : []
};

const table_option_2 = {
	title : '财务数据',
	source : [
		{
			key : '1',
			name : '个人用户',
			url : './components/data/test_data_1.json',
			columns : [
				{
					title : '统计日期',
					dataIndex : 'date',
					key : 'date'
				},
				{
					title : '累计充值金额',
					dataIndex : 'a',
					key : 'a'
				},
				{
					title : '累计返现金额',
					dataIndex : 'b',
					key : 'b'
				},
				{
					title : '充值金额',
					dataIndex : 'c',
					key : 'c'
				},
				{
					title : '返现金额',
					dataIndex : 'd',
					key : 'd'
				},
				{
					title : '充返合计',
					dataIndex : 'e',
					key : 'e'
				},
				{
					title : '充返扣减金额',
					dataIndex : 'f',
					key : 'f'
				},
				{
					title : '充返消费',
					dataIndex : 'g',
					key : 'g'
				},
				{
					title : '充返余额',
					dataIndex : 'h',
					key : 'h'
				},
				{
					title : '充值用户数',
					dataIndex : 'i',
					key : 'i'
				},
				{
					title : '人均充值',
					dataIndex : 'j',
					key : 'j'
				},
				{
					title : '首次充值用户数',
					dataIndex : 'k',
					key : 'k'
				},
				{
					title : '首次充值金额',
					dataIndex : 'l',
					key : 'l'
				}
			]
		},
		{
			key : '2',
			name : '一分充返',
			url : './components/data/test_data_2.json',
			columns : [
				{
					title : '统计日期',
					dataIndex : 'date',
					key : 'date'
				},
				{
					title : '累计充值金额',
					dataIndex : 'a',
					key : 'a'
				},
				{
					title : '累计返现金额',
					dataIndex : 'b',
					key : 'b'
				},
				{
					title : '充值金额',
					dataIndex : 'c',
					key : 'c'
				},
				{
					title : '返现金额',
					dataIndex : 'd',
					key : 'd'
				},
				{
					title : '充返合计',
					dataIndex : 'e',
					key : 'e'
				},
				{
					title : '累计充值用户数',
					dataIndex : 'f',
					key : 'f'
				},
				{
					title : '充值用户数',
					dataIndex : 'g',
					key : 'g'
				}
			]
		},
		{
			key : '3',
			name : '用户拉用户',
			url : './components/data/test_data_3.json',
			columns : [
				{
					title : '统计日期',
					dataIndex : 'date',
					key : 'date'
				},
				{
					title : '累计充值金额',
					dataIndex : 'a',
					key : 'a'
				},
				{
					title : '累计返现金额',
					dataIndex : 'b',
					key : 'b'
				},
				{
					title : '充值金额',
					dataIndex : 'c',
					key : 'c'
				},
				{
					title : '返现金额',
					dataIndex : 'd',
					key : 'd'
				},
				{
					title : '充返合计',
					dataIndex : 'e',
					key : 'e'
				},
				{
					title : '充值用户数',
					dataIndex : 'f',
					key : 'f'
				},
				{
					title : '人均充值',
					dataIndex : 'g',
					key : 'g'
				},
				{
					title : '邀请人数量',
					dataIndex : 'h',
					key : 'h'
				},
				{
					title : '邀请人返现金额',
					dataIndex : 'i',
					key : 'i'
				}
			]
		},
		{
			key : '4',
			name : '司机拉用户',
			url : './components/data/test_data_4.json',
			columns : [
				{
					title : '统计日期',
					dataIndex : 'date',
					key : 'date'
				},
				{
					title : '累计充值金额',
					dataIndex : 'a',
					key : 'a'
				},
				{
					title : '累计返现金额',
					dataIndex : 'b',
					key : 'b'
				},
				{
					title : '充值金额',
					dataIndex : 'c',
					key : 'c'
				},
				{
					title : '返现金额',
					dataIndex : 'd',
					key : 'd'
				},
				{
					title : '充返合计',
					dataIndex : 'e',
					key : 'e'
				},
				{
					title : '充值用户数',
					dataIndex : 'f',
					key : 'f'
				},
				{
					title : '人均充值',
					dataIndex : 'g',
					key : 'g'
				},
				{
					title : '邀请人数量',
					dataIndex : 'h',
					key : 'h'
				},
				{
					title : '邀请人返现金额',
					dataIndex : 'i',
					key : 'i'
				}
			]
		}
	]
};

const table_option_3 = {
	title : '用户行为数据',
	source : [
		{
			key : '1',
			name : '全部',
			url : './components/data/test_data_1.json',
			columns : [
				{
					title : '统计日期',
					dataIndex : 'date',
					key : 'date'
				},
				{
					title : '使用人数',
					dataIndex : 'a',
					key : 'a'
				},
				{
					title : '人均订单数',
					dataIndex : 'b',
					key : 'b'
				},
				{
					title : '单均金额',
					dataIndex : 'c',
					key : 'c'
				},
				{
					title : '单均优惠',
					dataIndex : 'd',
					key : 'd'
				},
				{
					title : '单均充值返现优惠',
					dataIndex : 'e',
					key : 'e'
				}
			]
		},
		{
			key : '2',
			name : '用户类型',
			url : './components/data/test_data_2.json',
			columns : [
				{
					title : '统计日期',
					dataIndex : 'date',
					key : 'date'
				},
				{
					title : '新用户',
					children : [
						{
							title : '使用人数',
							dataIndex : 'a',
							key : 'a'
						},
						{
							title : '人均订单数',
							dataIndex : 'b',
							key : 'b'
						}
					]
				},
				{
					title : '老用户',
					children : [
						{
							title : '使用人数',
							dataIndex : 'c',
							key : 'c'
						},
						{
							title : '人均订单数',
							dataIndex : 'd',
							key : 'd'
						}
					]
				}
			]
		},
		{
			key : '3',
			name : '用户级别',
			url : './components/data/test_data_3.json',
			columns : [
				{
					title : '统计日期',
					dataIndex : 'date',
					key : 'date'
				},
				{
					title : '银卡',
					children : [
						{
							title : '使用人数',
							dataIndex : 'a',
							key : 'a'
						},
						{
							title : '人均订单数',
							dataIndex : 'b',
							key : 'b'
						}
					]
				},
				{
					title : '金卡',
					children : [
						{
							title : '使用人数',
							dataIndex : 'c',
							key : 'c'
						},
						{
							title : '人均订单数',
							dataIndex : 'd',
							key : 'd'
						}
					]
				},
				{
					title : '白金卡',
					children : [
						{
							title : '使用人数',
							dataIndex : 'e',
							key : 'e'
						},
						{
							title : '人均订单数',
							dataIndex : 'f',
							key : 'f'
						}
					]
				},
				{
					title : '钻石卡',
					children : [
						{
							title : '使用人数',
							dataIndex : 'g',
							key : 'g'
						},
						{
							title : '人均订单数',
							dataIndex : 'h',
							key : 'h'
						}
					]
				}
			]
		}
	]
};

const table_option_4 = {
	title : '风控数据-全国',
	columns : [
		{
			title : '统计日期',
			dataIndex : 'date',
			key : 'date'
		},
		{
			title : '判罚订单数',
			dataIndex : 'a',
			key : 'a'
		},
		{
			title : '订单不结算金额',
			dataIndex : 'b',
			key : 'b'
		},
		{
			title : '充返活动判罚订单数',
			dataIndex : 'c',
			key : 'c'
		},
		{
			title : '充返活动不结算金额',
			dataIndex : 'd',
			key : 'd'
		},
		{
			title : '充返活动作弊司机数',
			dataIndex : 'e',
			key : 'e'
		},
		{
			title : '充返活动司机罚款数',
			dataIndex : 'f',
			key : 'f'
		},
		{
			title : '充返活动白名单',
			dataIndex : 'g',
			key : 'g'
		},
		{
			title : '充返活动黑名单',
			dataIndex : 'h',
			key : 'h'
		}
	],
	url : './components/data/test_data_1.json',
	source : []
};

class RechargeReturn extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			params : {
				startDate : moment().subtract(7, 'days').format('YYYY-MM-DD'),
				endDate : moment().subtract(1, 'days').format('YYYY-MM-DD'),
				city : this.props.city
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
					项目分析 > 充值返现
				</div>
				<div className="div-1">
					<div className="right-box">
						<RangePicker 
							style = {{width:200}}
							onChange = {this.selectDate.bind(this)}
							defaultValue = {[moment().subtract(7, 'days'), moment().subtract(1, 'days')]} 
						/>
					</div>
				</div>
				<TableData tableOptions={table_option_1} params={this.state.params} />
				<TableData tableOptions={table_option_2} params={this.state.params} />
				<TableData tableOptions={table_option_3} params={this.state.params} />
				<TableData tableOptions={table_option_4} params={this.state.params} />
			</div>
		);
	}

}

export default RechargeReturn;