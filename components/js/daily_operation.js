/**
 * @author JUNCHAO KONG
 * @date 2016-10-19
 * @description 运营日报模块
 */

import React from 'react';
import ReactDom from 'react-dom';
import Echarts from './common/echarts.js';
import TableData from './common/table_data.js';
import moment from 'moment';
import { DatePicker, Menu, Dropdown, Icon } from 'antd';
import Sort from './common/sort.js';
const sort = new Sort();
import '../css/daily_operation.scss';

const menu = (
	<Menu>
		<Menu.Item>
			<a href="#DailyOperation?table_1">订单收入及成本</a>
		</Menu.Item>
		<Menu.Item>
			<a href="#DailyOperation?table_2">订单分布</a>
		</Menu.Item>
		<Menu.Item>
			<a href="#DailyOperation?table_3">运力分析</a>
		</Menu.Item>
		<Menu.Item>
			<a href="#DailyOperation?table_4">用户统计</a>
		</Menu.Item>
		<Menu.Item>
			<a href="#DailyOperation?table_5">派单分析</a>
		</Menu.Item>
		<Menu.Item>
			<a href="#DailyOperation?table_6">司机服务质量</a>
		</Menu.Item>
	</Menu>
);

const table_option_2 = {
	title : '订单分布',
	source : [
		{
			key : '1',
			name : '产品类型',
			url : './components/data/test_data_1.json',
			columns : [
				{
					title : '统计日期',
					dataIndex : 'date',
					key : 'date',
					width : 80,
					fixed : 'left'
				},
				{
					title : '时租-包时',
					children : [
						{
							title : '订单数',
							dataIndex : 'a',
							key : 'a'
						},
						{
							title : '订单金额',
							dataIndex : 'b',
							key : 'b'
						}
					]
				},
				{
					title : '定价-接机',
					children : [
						{
							title : '订单数',
							dataIndex : 'c',
							key : 'c'
						},
						{
							title : '订单金额',
							dataIndex : 'd',
							key : 'd'
						}
					]
				},
				{
					title : '定价-送机',
					children : [
						{
							title : '订单数',
							dataIndex : 'e',
							key : 'e'
						},
						{
							title : '订单金额',
							dataIndex : 'f',
							key : 'f'
						}
					]
				},
				{
					title : '定价-半日租',
					children : [
						{
							title : '订单数',
							dataIndex : 'g',
							key : 'g'
						},
						{
							title : '订单金额',
							dataIndex : 'h',
							key : 'h'
						}
					]
				},
				{
					title : '定价-日租',
					children : [
						{
							title : '订单数',
							dataIndex : 'i',
							key : 'i'
						},
						{
							title : '订单金额',
							dataIndex : 'j',
							key : 'j'
						}
					]
				},
				{
					title : '定价-热门线路',
					children : [
						{
							title : '订单数',
							dataIndex : 'k',
							key : 'k'
						},
						{
							title : '订单金额',
							dataIndex : 'l',
							key : 'l'
						}
					]
				},
				{
					title : '其它',
					children : [
						{
							title : '订单数',
							dataIndex : 'm',
							key : 'm'
						},
						{
							title : '订单金额',
							dataIndex : 'n',
							key : 'n'
						}
					]
				},
			]
		},
		{
			key : '2',
			name : '车辆级别',
			url : './components/data/test_data_2.json',
			columns : [
				{
					title : '统计日期',
					dataIndex : 'date',
					key : 'date',
					width : 80,
					fixed : 'left'
				},
				{
					title : 'Young',
					children : [
						{
							title : '订单数',
							dataIndex : 'a',
							key : 'a'
						},
						{
							title : '订单金额',
							dataIndex : 'b',
							key : 'b'
						}
					]
				},
				{
					title : '舒适车型',
					children : [
						{
							title : '订单数',
							dataIndex : 'c',
							key : 'c'
						},
						{
							title : '订单金额',
							dataIndex : 'd',
							key : 'd'
						}
					]
				},
				{
					title : '商务车型',
					children : [
						{
							title : '订单数',
							dataIndex : 'e',
							key : 'e'
						},
						{
							title : '订单金额',
							dataIndex : 'f',
							key : 'f'
						}
					]
				},
				{
					title : '豪华车型',
					children : [
						{
							title : '订单数',
							dataIndex : 'g',
							key : 'g'
						},
						{
							title : '订单金额',
							dataIndex : 'h',
							key : 'h'
						}
					]
				},
				{
					title : '奢华车型',
					children : [
						{
							title : '订单数',
							dataIndex : 'i',
							key : 'i'
						},
						{
							title : '订单金额',
							dataIndex : 'j',
							key : 'j'
						}
					]
				},
				{
					title : '其它车型',
					children : [
						{
							title : '订单数',
							dataIndex : 'k',
							key : 'k'
						},
						{
							title : '订单金额',
							dataIndex : 'l',
							key : 'l'
						}
					]
				},
				{
					title : '新能源车型',
					children : [
						{
							title : '订单数',
							dataIndex : 'm',
							key : 'm'
						},
						{
							title : '订单金额',
							dataIndex : 'n',
							key : 'n'
						}
					]
				}
			]
		},
		{
			key : '3',
			name : '下单平台',
			url : './components/data/test_data_3.json',
			columns : [
				{
					title : '统计日期',
					dataIndex : 'date',
					key : 'date',
					width : 80,
					fixed : 'left'
				},
				{
					title : 'IOS',
					children : [
						{
							title : '订单数',
							dataIndex : 'a',
							key : 'a'
						},
						{
							title : '订单金额',
							dataIndex : 'b',
							key : 'b'
						}
					]
				},
				{
					title : 'Android',
					children : [
						{
							title : '订单数',
							dataIndex : 'c',
							key : 'c'
						},
						{
							title : '订单金额',
							dataIndex : 'd',
							key : 'd'
						}
					]
				},
				{
					title : '网站',
					children : [
						{
							title : '订单数',
							dataIndex : 'e',
							key : 'e'
						},
						{
							title : '订单金额',
							dataIndex : 'f',
							key : 'f'
						}
					]
				},
				{
					title : '手机网站',
					children : [
						{
							title : '订单数',
							dataIndex : 'g',
							key : 'g'
						},
						{
							title : '订单金额',
							dataIndex : 'h',
							key : 'h'
						}
					]
				},
				{
					title : 'CRM',
					children : [
						{
							title : '订单数',
							dataIndex : 'i',
							key : 'i'
						},
						{
							title : '订单金额',
							dataIndex : 'j',
							key : 'j'
						}
					]
				},
				{
					title : '开放平台',
					children : [
						{
							title : '订单数',
							dataIndex : 'k',
							key : 'k'
						},
						{
							title : '订单金额',
							dataIndex : 'l',
							key : 'l'
						}
					]
				},
				{
					title : '网站第三方嵌套',
					children : [
						{
							title : '订单数',
							dataIndex : 'm',
							key : 'm'
						},
						{
							title : '订单金额',
							dataIndex : 'n',
							key : 'n'
						}
					]
				},
				{
					title : 'H5第三方嵌套',
					children : [
						{
							title : '订单数',
							dataIndex : 'o',
							key : 'o'
						},
						{
							title : '订单金额',
							dataIndex : 'p',
							key : 'p'
						}
					]
				},
				{
					title : 'iPhone APP',
					children : [
						{
							title : '订单数',
							dataIndex : 'q',
							key : 'q'
						},
						{
							title : '订单金额',
							dataIndex : 'r',
							key : 'r'
						}
					]
				},
				{
					title : '其它',
					children : [
						{
							title : '订单数',
							dataIndex : 's',
							key : 's'
						},
						{
							title : '订单金额',
							dataIndex : 't',
							key : 't'
						}
					]
				}
			]
		},
		{
			key : '4',
			name : '用户级别',
			url : './components/data/test_data_4.json',
			columns : [
				{
					title : '统计日期',
					dataIndex : 'date',
					key : 'date',
					width : 80,
					fixed : 'left'
				},
				{
					title : '钻石用户',
					children : [
						{
							title : '订单数',
							dataIndex : 'a',
							key : 'a'
						},
						{
							title : '订单金额',
							dataIndex : 'b',
							key : 'b'
						}
					]
				},
				{
					title : '白金用户',
					children : [
						{
							title : '订单数',
							dataIndex : 'c',
							key : 'c'
						},
						{
							title : '订单金额',
							dataIndex : 'd',
							key : 'd'
						}
					]
				},
				{
					title : '金卡用户',
					children : [
						{
							title : '订单数',
							dataIndex : 'e',
							key : 'e'
						},
						{
							title : '订单金额',
							dataIndex : 'f',
							key : 'f'
						}
					]
				},
				{
					title : '银卡用户',
					children : [
						{
							title : '订单数',
							dataIndex : 'g',
							key : 'g'
						},
						{
							title : '订单金额',
							dataIndex : 'h',
							key : 'h'
						}
					]
				},
				{
					title : '其它',
					children : [
						{
							title : '订单数',
							dataIndex : 'i',
							key : 'i'
						},
						{
							title : '订单金额',
							dataIndex : 'j',
							key : 'j'
						}
					]
				}
			]
		},
		{
			key : '5',
			name : '用户类型',
			url : './components/data/test_data_5.json',
			columns : [
				{
					title : '统计日期',
					dataIndex : 'date',
					key : 'date',
					width : 80,
					fixed : 'left'
				},
				{
					title : '当日新激活用户',
					children : [
						{
							title : '订单数',
							dataIndex : 'a',
							key : 'a'
						},
						{
							title : '订单金额',
							dataIndex : 'b',
							key : 'b'
						}
					]
				},
				{
					title : '当日老用户',
					children : [
						{
							title : '订单数',
							dataIndex : 'c',
							key : 'c'
						},
						{
							title : '订单金额',
							dataIndex : 'd',
							key : 'd'
						}
					]
				}
			]
		}
	]
};

const table_option_3 = {
	title : '运力分析',
	columns : [
		{
			title : '统计日期',
			dataIndex : 'date',
			key : 'date',
			width : 80,
			fixed : 'left'
		},
		{
			title : '司机注册',
			children : [
				{
					title : '注册',
					dataIndex : 'a',
					key : 'a'
				},
				{
					title : '审核',
					dataIndex : 'b',
					key : 'b'
				},
				{
					title : '激活',
					dataIndex : 'c',
					key : 'c'
				}
			]
		},
		{
			title : '司机活跃',
			children : [
				{
					title : '有效司机数',
					dataIndex : 'd',
					key : 'd'
				},
				{
					title : '在线司机数',
					dataIndex : 'e',
					key : 'e'
				},
				{
					title : '活跃司机数',
					dataIndex : 'f',
					key : 'f'
				},
				{
					title : '在线率',
					dataIndex : 'g',
					key : 'g'
				},
				{
					title : '活跃率',
					dataIndex : 'h',
					key : 'h'
				}
			]
		},
		{
			title : '接单难度',
			children : [
				{
					title : '派单次数',
					dataIndex : 'i',
					key : 'i'
				},
				{
					title : '接单次数',
					dataIndex : 'j',
					key : 'j'
				},
				{
					title : '中标次数',
					dataIndex : 'k',
					key : 'k'
				},
				{
					title : '接单率',
					dataIndex : 'l',
					key : 'l'
				},
				{
					title : '中标率',
					dataIndex : 'm',
					key : 'm'
				}
			]
		}
	],
	source : [
		{
			key : '1',
			name : '全部',
			url : './components/data/test_data_1.json'
		},
		{
			key : '2',
			name : '见习专车',
			url : './components/data/test_data_2.json'
		},
		{
			key : '3',
			name : '舒适车型',
			url : './components/data/test_data_3.json'
		},
		{
			key : '4',
			name : '商务车型',
			url : './components/data/test_data_4.json'
		},
		{
			key : '5',
			name : '豪华车型',
			url : './components/data/test_data_5.json'
		},
		{
			key : '6',
			name : '其它车型',
			url : './components/data/test_data_6.json'
		}
	]
};

const table_option_4 = {
	title : '用户统计',
	columns : [
		{
			title : '统计日期',
			dataIndex : 'date',
			key : 'date',
			width : 80,
			fixed : 'left'
		},
		{
			title : '企业账户',
			children : [
				{
					title : '累计注册',
					dataIndex : 'a',
					key : 'a'
				},
				{
					title : '新增注册',
					dataIndex : 'b',
					key : 'b'
				},
				{
					title : '累计激活',
					dataIndex : 'c',
					key : 'c'
				},
				{
					title : '新增激活',
					dataIndex : 'd',
					key : 'd'
				}
			]
		},
		{
			title : '个人账户',
			children : [
				{
					title : '累计注册',
					dataIndex : 'e',
					key : 'e'
				},
				{
					title : '新增注册',
					dataIndex : 'f',
					key : 'f'
				},
				{
					title : '累计激活',
					dataIndex : 'g',
					key : 'g'
				},
				{
					title : '新增激活',
					dataIndex : 'h',
					key : 'h'
				}
			]
		},
		{
			title : '个人账户-BD',
			children : [
				{
					title : '新增注册',
					dataIndex : 'i',
					key : 'i'
				},
				{
					title : '新增激活',
					dataIndex : 'j',
					key : 'j'
				}
			]
		},
		{
			title : '个人账户-市场',
			children : [
				{
					title : '新增注册',
					dataIndex : 'k',
					key : 'k'
				},
				{
					title : '新增激活',
					dataIndex : 'l',
					key : 'l'
				}
			]
		}
	],
	url : './components/data/test_data_1.json',
	source : []
};

const table_option_5 = {
	title : '派单分析',
	columns : [
		{
			title : '统计日期',
			dataIndex : 'date',
			key : 'date',
			width : 80,
			fixed : 'left'
		},
		{
			title : '创建成功订单',
			dataIndex : 'a',
			key : 'a'
		},
		{
			title : '派单',
			children : [
				{
					title : '主动取消',
					dataIndex : 'b',
					key : 'b'
				},
				{
					title : '有车接单',
					dataIndex : 'c',
					key : 'c'
				},
				{
					title : '有车无人接',
					dataIndex : 'd',
					key : 'd'
				},
				{
					title : '无车可派',
					dataIndex : 'e',
					key : 'e'
				}
			]
		},
		{
			title : '决策',
			children : [
				{
					title : '主动取消',
					dataIndex : 'f',
					key : 'f'
				},
				{
					title : '主动选择',
					dataIndex : 'g',
					key : 'g'
				},
				{
					title : '超时取消',
					dataIndex : 'h',
					key : 'h'
				}
			]
		},
		{
			title : '服务',
			children : [
				{
					title : '主动取消',
					dataIndex : 'i',
					key : 'i'
				},
				{
					title : '当日完成',
					dataIndex : 'j',
					key : 'j'
				},
				{
					title : '等待服务',
					dataIndex : 'k',
					key : 'k'
				}
			]
		},
		{
			title : '订单概览',
			children : [
				{
					title : '派单成功率',
					dataIndex : 'l',
					key : 'l'
				},
				{
					title : '决策率',
					dataIndex : 'm',
					key : 'm'
				},
				{
					title : '当日完成率',
					dataIndex : 'n',
					key : 'n'
				}
			]
		}
	],
	source : [
		{
			key : '1',
			name : '全部',
			url : './components/data/test_data_1.json'
		},
		{
			key : '2',
			name : '钻石卡',
			url : './components/data/test_data_2.json'
		},
		{
			key : '3',
			name : '白金卡',
			url : './components/data/test_data_3.json'
		},
		{
			key : '4',
			name : '金卡',
			url : './components/data/test_data_4.json'
		},
		{
			key : '5',
			name : '银卡非首单',
			url : './components/data/test_data_5.json'
		},
		{
			key : '6',
			name : '银卡首单',
			url : './components/data/test_data_6.json'
		}
	]
};

const table_option_6 = {
	title : '司机服务质量',
	columns : [
		{
			title : '统计日期',
			dataIndex : 'date',
			key : 'date',
			width : 80,
			fixed : 'left'
		},
		{
			title : '差评',
			children : [
				{
					title : '差评数',
					dataIndex : 'a',
					key : 'a'
				},
				{
					title : '忽悠乘客取消订单数',
					dataIndex : 'b',
					key : 'b'
				},
				{
					title : '差评率',
					dataIndex : 'c',
					key : 'c'
				}
			]
		},
		{
			title : '司机爽约',
			children : [
				{
					title : '自动改派数',
					dataIndex : 'd',
					key : 'd'
				},
				{
					title : '改派率',
					dataIndex : 'e',
					key : 'e'
				}
			]
		},
		{
			title : '平均等待时长',
			children : [
				{
					title : 'ASAP',
					dataIndex : 'f',
					key : 'f'
				}
			]
		},
		{
			title : '迟到订单-平均等待时长',
			children : [
				{
					title : '时租',
					dataIndex : 'g',
					key : 'g'
				},
				{
					title : '送机',
					dataIndex : 'h',
					key : 'h'
				},
				{
					title : '其它',
					dataIndex : 'i',
					key : 'i'
				}
			]
		},
		{
			title : '迟到订单占比',
			children : [
				{
					title : '时租',
					dataIndex : 'j',
					key : 'j'
				},
				{
					title : '送机',
					dataIndex : 'k',
					key : 'k'
				},
				{
					title : '其它',
					dataIndex : 'l',
					key : 'l'
				}
			]
		}
	],
	source : [
		{
			key : '1',
			name : '全部',
			url : './components/data/test_data_1.json'
		},
		{
			key : '2',
			name : '见习专车',
			url : './components/data/test_data_2.json'
		},
		{
			key : '3',
			name : '舒适车型',
			url : './components/data/test_data_3.json'
		},
		{
			key : '4',
			name : '商务车型',
			url : './components/data/test_data_4.json'
		},
		{
			key : '5',
			name : '豪华车型',
			url : './components/data/test_data_5.json'
		},
		{
			key : '6',
			name : '其它车型',
			url : './components/data/test_data_6.json'
		}
	]
};

class DailyOperation extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			params : {
				startDate : moment().subtract(7, 'days').format('YYYY-MM-DD'),
				endDate : moment().subtract(1, 'days').format('YYYY-MM-DD'),
				city : this.props.city
			},
			data : [],
			chart_option : {}
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
	
	componentWillMount(){
		var that = this;
		//fetch发送GET请求
		fetch('./components/data/test_data_8.json').then(function(res){
			if(res.ok){
				res.json().then(function(data){
					var xData = [],
						yData = [];
					for(let i = 0, len = data.length; i < len; i++){
						xData.push(data[i].date);
						yData.push(data[i].value);
					}
					var chart_option = {
						xAxis : {
							name : '日期',
							data : xData
						},
						yAxis : {
							name : ''
						},
						series : [
							{
								name : '订单数',
								data : yData
							},
							{
								name : '收入',
								data : yData
							},
							{
								name : '补贴',
								data : yData
							},
							{
								name : '优惠',
								data : yData
							},
							{
								name : '派单成功率',
								data : yData
							},
							{
								name : '差评率',
								data : yData
							}
						]
					};
					that.setState({
						chart_option : chart_option
					})
				})
			}else if(res.status === 401){
				console.log('请求失败');
			}
		}, function(e){
			console.log('请求失败');
		})
	}
	
	componentDidMount(){
		var data = [
			{
				name : '订单数',
				number : '19936665',
				weekRing : '1.87%',
				dayRing : '0.78%'
			},
			{
				name : '收入',
				number : '19936665',
				weekRing : '-1.87%',
				dayRing : '0.78%'
			},
			{
				name : '补贴',
				number : '19936665',
				weekRing : '1.87%',
				dayRing : '-0.78%'
			},
			{
				name : '用户优惠',
				number : '19936665',
				weekRing : '1.87%',
				dayRing : '0.78%'
			},
			{
				name : '运营利润',
				number : '19936665',
				weekRing : '-1.87%',
				dayRing : '-0.78%'
			},
			{
				name : '派单成功率',
				number : '19936665',
				weekRing : '1.87%',
				dayRing : '0.78%'
			},
			{
				name : '差评率',
				number : '19936665',
				weekRing : '1.87%',
				dayRing : '0.78%'
			},
			{
				name : '单均金额',
				number : '19936665',
				weekRing : '-1.87%',
				dayRing : '-0.78%'
			}
		];
		this.setState({
			data : data
		})
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
		const table_option_1 = {
			title : '订单收入及成本',
			columns : [
				{
					title : '统计日期',
					dataIndex : 'stat_time',
					key : 'stat_time',
					width : 80,
					fixed : 'left'
				},
				{
					title : '收入',
					children : [
						{
							title : '完成订单数',
							dataIndex : 'finish_order',
							key : 'finish_order',
							sorter : (a, b) => sort.getSort(a.finish_order, b.finish_order)
						},
						{
							title : '订单金额',
							dataIndex : 'origin_amount',
							key : 'origin_amount',
							sorter : (a, b) => sort.getSort(a.origin_amount, b.origin_amount)
						}
					]
				},
				{
					title : '成本',
					children : [
						{
							title : '（服务成本）',
							dataIndex : 'chengben',
							key : 'chengben',
							sorter : (a, b) => sort.getSort(a.chengben, b.chengben)
						}
					]
				},
				{
					title : '毛利润',
					children : [
						{
							title : '（收入-成本）',
							dataIndex : 'profile',
							key : 'profile',
							sorter : (a, b) => sort.getSort(a.profile, b.profile)
						}
					]
				},
				{
					title : '毛利率',
					dataIndex : 'profile_rate',
					key : 'profile_rate',
					sorter : (a, b) => sort.getSort(a.profile_rate, b.profile_rate)
				},
				{
					title : '费用',
					children : [
						{
							title : '动态加价成本',
							dataIndex : 'add_amount',
							key : 'add_amount',
							sorter : (a, b) => sort.getSort(a.add_amount, b.add_amount)
						},
						{
							title : '数单奖',
							dataIndex : 'shudan_amount',
							key : 'shudan_amount',
							sorter : (a, b) => sort.getSort(a.shudan_amount, b.shudan_amount)
						},
						{
							title : '计费差额',
							dataIndex : 'jifei_chae',
							key : 'jifei_chae',
							sorter : (a, b) => sort.getSort(a.jifei_chae, b.jifei_chae)
						},
						{
							title : '用户优惠',
							dataIndex : 'jifei_chae_amount',
							key : 'jifei_chae_amount',
							sorter : (a, b) => sort.getSort(a.jifei_chae_amount, b.jifei_chae_amount)
						},
						{
							title : '充返优惠',
							dataIndex : 'amount',
							key : 'amount',
							sorter : (a, b) => sort.getSort(a.amount, b.amount)
						},
						{
							title : 'YOP分佣',
							dataIndex : 'yop_amount',
							key : 'yop_amount',
							sorter : (a, b) => sort.getSort(a.yop_amount, b.yop_amount)
						}
					]
				},
				{
					title : '运营利率',
					dataIndex : 'yunying_profile_rate',
					key : 'yunying_profile_rate',
					sorter : (a, b) => sort.getSort(a.yunying_profile_rate, b.yunying_profile_rate)
				},
				{
					title : '单均金额',
					dataIndex : 'rent_amount',
					key : 'rent_amount',
					sorter : (a, b) => sort.getSort(a.rent_amount, b.rent_amount)
				},
				{
					title : '风控处罚金额',
					dataIndex : 'fengkong_amount',
					key : 'fengkong_amount',
					sorter : (a, b) => sort.getSort(a.fengkong_amount, b.fengkong_amount)
				},
				{
					title : '运营利润',
					children : [
						{
							title : '（毛利润-费用）',
							dataIndex : 'yunying_profile',
							key : 'yunying_profile',
							sorter : (a, b) => sort.getSort(a.yunying_profile, b.yunying_profile)
						}
					]
				}
			],
			source : [
				{
					key : '1',
					name : '全部',
					url : './components/data/test_data_7.json'
				},
				{
					key : '2',
					name : '专车',
					url : './components/data/test_data_2.json'
				},
				{
					key : '3',
					name : '见习专车',
					url : './components/data/test_data_3.json'
				},
				{
					key : '4',
					name : '品牌车',
					url : './components/data/test_data_4.json'
				}
			]
		};
		return (
			<div className="main-box">
				<div className="top-nav">
					报表 > 运营日报
				</div>
				<div className="div-1">
					<DatePicker 
						style = {{width:'150px', lineHeight:'0', marginTop:'4px'}}
						onChange = {this.selectDate.bind(this)}
						defaultValue = {moment().subtract(1, 'days')} 
					/>
					<div className="right-box">
						<Dropdown overlay={menu}>
							<Icon type="paper-clip" />
						</Dropdown>
					</div>
				</div>
				<ul className="ul-2">
					{
						this.state.data.map(function(data){
							return <li key={data.name}>
								<h1>{data.name}</h1>
								<h2>{data.number}</h2>
								<p className={data.weekRing.indexOf('-') === -1 ? 'up' : 'down'}>周同比 {data.weekRing}<Icon type={data.weekRing.indexOf('-') === -1 ? 'arrow-up' : 'arrow-down'} /></p>
								<p className={data.dayRing.indexOf('-') === -1 ? 'up' : 'down'}>日环比 {data.dayRing}<Icon type={data.dayRing.indexOf('-') === -1 ? 'arrow-up' : 'arrow-down'} /></p>
							</li>
						})
					}
				</ul>
				<div style={{width:"100%", height:"380px", marginTop:"40px"}}>
					<Echarts id="chart_1" option={this.state.chart_option} />
				</div>
				<TableData tableOptions={table_option_1} params={this.state.params} id="DailyOperation?table_1" />
				<TableData tableOptions={table_option_2} params={this.state.params} id="DailyOperation?table_2" />
				<TableData tableOptions={table_option_3} params={this.state.params} id="DailyOperation?table_3" />
				<TableData tableOptions={table_option_4} params={this.state.params} id="DailyOperation?table_4" />
				<TableData tableOptions={table_option_5} params={this.state.params} id="DailyOperation?table_5" />
				<TableData tableOptions={table_option_6} params={this.state.params} id="DailyOperation?table_6" />
			</div>
		);
	}

}

export default DailyOperation;