/**
 * @author JUNCHAO KONG
 * @date 2016-10-19
 * @description 主入口模块
 */

import React from 'react';
import ReactDom from 'react-dom';
//引入路由
import { Router, Route, hashHistory, Link, IndexLink, Redirect, IndexRedirect, IndexRoute } from 'react-router';
//引入子模块
import Index from './index.js';										//首页
import DailyOperation from './daily_operation.js';					//运营日报
import TodayForecast from './today_forecast.js';					//今日预测
import MailManagementTask from './mail_management_task.js';			//邮件管理系统-任务管理
import MailManagementTaskMail from './mail_management_task_mail.js';//邮件管理系统-任务邮箱管理
import MailManagementTemplate from './mail_management_template.js';	//邮件管理系统-模板管理
import MailManagementTaskLog from './mail_management_task_log.js';	//邮件管理系统-任务日志
import WarnModule from './warn_module.js';							//预警管理系统-预警模块
import WarnIndex from './warn_index.js';							//预警管理系统-预警指标
import WarnPhone from './warn_phone.js';							//预警管理系统-预警手机号
import MessageManagement from './message_management.js';			//公告管理
import AccessLog from './access_log.js';							//访问日志
import RechargeReturn from './recharge_return.js';					//充值返现
import UserExperience from './user_experience.js';					//用户体验
import MarketPromotion from './market_promotion.js';				//市场推广
import ConsumerActiveUser from './consumer_active_user.js';			//消费活跃用户
import AccessActiveUser from './access_active_user.js';				//访问活跃用户
import PersonTicketDaily from './person_ticket_daily.js';			//个人用券监控日报
import PersonTicketTable from './person_ticket_table.js';			//个人用券监控报表
import BusinessRegisterTable from './business_register_table.js';	//企业注册报表
import BusinessActiveTable from './business_active_table.js';		//企业激活报表
import AreaIncome from './area_income.js';							//地域收入
import ProductIncome from './product_income.js';					//产品收入
import OrderSource from './order_source.js';						//订单来源
import CompleteOrder from './complete_order.js';					//完成订单
import CarAnalysis from './car_analysis.js';						//车源分析
import CarMarketExtension from './car_market_extension.js';			//车源市场推广
import RegisterDriver from './register_driver.js';					//注册司机
import RealtimeOrderHalf from './realtime_order_half.js';			//实时派单半小时
import ErrorOrder from './error_order.js';							//失败订单
import DriverOrderPercent from './driver_order_percent.js';			//司机接单率
import BusinessAccountInfo from './business_account_info.js';		//企业账户信息
import CompetitorPrice from './competitor_price.js';				//竞品价格
import CtripAirport from './ctrip_airport.js';						//携程接送机
import ProductService from './product_service.js';					//部门关键指标-产品部
import WeekReportDetails from './week_report_details.js';			//周报详情
import Message from './message.js';									//消息

import { Menu, Icon, Switch, Select, BackTop, Badge, Modal, notification } from 'antd';
const SubMenu = Menu.SubMenu;
const SelectOption = Select.Option;
const confirm = Modal.confirm;
import SelectCity from './common/select_city.js'
//引入样式表
import 'antd/dist/antd.css';
import '../css/main.scss';

class Main extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			city : '全国',
			theme : 'light',
			mode : 'inline',
			username : '',
			current : '1',
			openKeys : [],
			leftDivShow : true
		}
	}
	
	onOpenChange(openKeys){
		const state = this.state;
		const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
		const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));
		let nextOpenKeys = [];
		if(latestOpenKey){
			nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
		}
		if(latestCloseKey){
			nextOpenKeys = this.getAncestorKeys(latestCloseKey);
		}
		this.setState({
			openKeys : nextOpenKeys
		})
	}
	
	handleClick(e){
		this.setState({
			current : e.key
		})
	}
	
	getAncestorKeys(key){
		const map = {
			sub3 : ['sub2'],
			sub4 : ['sub2']
		};
		return map[key] || [];
	}
	
	//滚动提示信息
	scrollTips(){
		var tipsBox = document.getElementsByClassName('tips')[0],
			tips = tipsBox.childNodes,
			height = 20;
		if(tips.length < 2){
			return;
		}
		tipsBox.style.position = 'relative';
		for(let i = 0, len = tips.length; i < len; i++){
			tips[i].style.position = 'absolute';
			tips[i].style.top = i * height + 'px';
		}
		setInterval(function(){
			for(let i = 0, len = tips.length; i < len; i++){
				tips[i].style.transition = 'top .6s';
				tips[i].style.top = parseInt(tips[i].style.top) - height + 'px';
				if(parseInt(tips[i].style.top) <= -height){
					tips[i].style.transition = '';
					tips[i].style.top = (len - 1) * height + 'px';
				}
			}
		}, 4000)
	}
	
	//选择城市
	selectCity(val){
		this.setState({
			city : val
		})
	}
	
	//隐藏侧边栏
	toggleLeftStatus(){
		var left = document.getElementById('left'),
			right = document.getElementById('right'),
			toggleBtn = document.getElementsByClassName('hide-left-btn')[0];
		if(this.state.leftDivShow === true){
			left.style.width = '1%';
			right.style.width = '99%';
			toggleBtn.style.left = '1%';
		}else{
			left.style.width = '15%';
			right.style.width = '85%';
			toggleBtn.style.left = '15%';
		}
		this.setState({
			leftDivShow : !this.state.leftDivShow
		})
	}
	
	//退出系统
	loginOut(){
		window.location.href = 'login.html';
	}
	
	componentDidMount(){
		this.scrollTips();
		notification.open({
			message : '欢迎你，孔俊超',
			description : '你上一次登录本系统的时间是2016年12月1日15时56分',
			duration : null,
			icon : <Icon type="smile" style={{color:'#108ee9', fontSize:'30px'}} />
		})
	}
	
	//父组件向子组件传递参数
	renderChildren(props){
		var that = this;
		return React.Children.map(props.children, function(child){
			return React.cloneElement(child, {
				city : that.state.city
			})
		})
	}
	
	render(){
		return (
			<div className="main">
				<div className="top">
					<img src="./components/images/logo.png" />
					<ul className="tips">
						<li>新版本BI系统上线啦!!!</li>
						<li>系统在调试阶段,有任何问题请随时联系开发人员!!!</li>
						<li>建议使用Google Chrome以获得最佳浏览体验</li>
					</ul>
					<div className="top-right">
						<span>
							<span style={{marginRight:"8px"}}>切换城市</span>
							<SelectCity city={this.state.city} selectCity={this.selectCity.bind(this)} />
						</span>|
						<span>孔俊超</span>|
						<Badge dot><Link to="/Message">消息</Link></Badge>|
						<span onClick={this.loginOut.bind(this)}>退出</span>
					</div>
				</div>
				<div className="left" id="left">
					<Menu
						mode = {this.state.mode}
						theme = {this.state.theme}
						openKeys = {this.state.openKeys}
						selectedKeys = {[this.state.current]}
						onOpenChange = {this.onOpenChange.bind(this)}
						onClick = {this.handleClick.bind(this)}
						style = {{width:'100%'}}
					>
						<SubMenu key="sub1" title={<span><Icon type="line-chart" /><span>报表</span></span>}>
							<Menu.Item key="1"><Link to="/Index">首页</Link></Menu.Item>
							<Menu.Item key="2"><Link to="/DailyOperation">运营日报</Link></Menu.Item>
							<Menu.Item key="3"><Link to="/TodayForecast">今日预测</Link></Menu.Item>
						</SubMenu>
						<SubMenu key="sub2" title={<span><Icon type="setting" /><span>工具</span></span>}>
							<SubMenu key="sub3" title={<span>邮件管理系统</span>}>
								<Menu.Item key="28"><Link to="/MailManagementTask">任务管理</Link></Menu.Item>
								<Menu.Item key="29"><Link to="/MailManagementTaskMail">任务邮箱管理</Link></Menu.Item>
								<Menu.Item key="30"><Link to="/MailManagementTemplate">模板管理</Link></Menu.Item>
								<Menu.Item key="31"><Link to="/MailManagementTaskLog">任务日志</Link></Menu.Item>
							</SubMenu>
							<SubMenu key="sub4" title={<span>预警管理系统</span>}>
								<Menu.Item key="32"><Link to="/WarnModule">预警模块</Link></Menu.Item>
								<Menu.Item key="33"><Link to="/WarnIndex">预警指标</Link></Menu.Item>
								<Menu.Item key="34"><Link to="/WarnPhone">预警手机号</Link></Menu.Item>
							</SubMenu>
							<Menu.Item key="35"><Link to="/MessageManagement">公告管理</Link></Menu.Item>
							<Menu.Item key="36"><Link to="/AccessLog">访问日志</Link></Menu.Item>
						</SubMenu>
						<SubMenu key="sub5" title={<span><Icon type="file-text" /><span>项目分析</span></span>}>
							<Menu.Item key="4"><Link to="/RechargeReturn">充值返现</Link></Menu.Item>
							<Menu.Item key="5"><Link to="/UserExperience">用户体验</Link></Menu.Item>
						</SubMenu>
						<SubMenu key="sub6" title={<span><Icon type="user" /><span>用户</span></span>}>
							<Menu.Item key="6"><Link to="/MarketPromotion">市场推广</Link></Menu.Item>
							<Menu.Item key="7"><Link to="/ConsumerActiveUser">消费活跃用户</Link></Menu.Item>
							<Menu.Item key="8"><Link to="/AccessActiveUser">访问活跃用户</Link></Menu.Item>
							<Menu.Item key="9"><Link to="/PersonTicketDaily">个人用券监控日报</Link></Menu.Item>
							<Menu.Item key="10"><Link to="/PersonTicketTable">个人用券监控报表</Link></Menu.Item>
						</SubMenu>
						<SubMenu key="sub7" title={<span><Icon type="team" /><span>企业用户</span></span>}>
							<Menu.Item key="11"><Link to="/BusinessRegisterTable">企业注册报表</Link></Menu.Item>
							<Menu.Item key="12"><Link to="/BusinessActiveTable">企业激活报表</Link></Menu.Item>
						</SubMenu>
						<SubMenu key="sub8" title={<span><Icon type="copy" /><span>订单</span></span>}>
							<Menu.Item key="13"><Link to="/AreaIncome">地域收入</Link></Menu.Item>
							<Menu.Item key="14"><Link to="/ProductIncome">产品收入</Link></Menu.Item>
							<Menu.Item key="15"><Link to="/OrderSource">订单来源</Link></Menu.Item>
							<Menu.Item key="16"><Link to="/CompleteOrder">完成订单</Link></Menu.Item>
						</SubMenu>
						<SubMenu key="sub9" title={<span><Icon type="share-alt" /><span>车源</span></span>}>
							<Menu.Item key="17"><Link to="/CarAnalysis">车源分析</Link></Menu.Item>
							<Menu.Item key="18"><Link to="/CarMarketExtension">车源市场推广</Link></Menu.Item>
							<Menu.Item key="19"><Link to="/RegisterDriver">注册司机</Link></Menu.Item>
						</SubMenu>
						<SubMenu key="sub10" title={<span><Icon type="environment-o" /><span>派单</span></span>}>
							<Menu.Item key="20"><Link to="/RealtimeOrderHalf">实时派单半小时</Link></Menu.Item>
							<Menu.Item key="21"><Link to="/ErrorOrder">失败订单</Link></Menu.Item>
							<Menu.Item key="22"><Link to="/DriverOrderPercent">司机接单率</Link></Menu.Item>
						</SubMenu>
						<SubMenu key="sub11" title={<span><Icon type="pay-circle-o" /><span>财务</span></span>}>
							<Menu.Item key="23"><Link to="/BusinessAccountInfo">企业账户信息</Link></Menu.Item>
						</SubMenu>
						<SubMenu key="sub12" title={<span><Icon type="heart-o" /><span>竞品</span></span>}>
							<Menu.Item key="24"><Link to="/CompetitorPrice">竞品价格</Link></Menu.Item>
							<Menu.Item key="25"><Link to="/CtripAirport">携程接送机</Link></Menu.Item>
						</SubMenu>
						<SubMenu key="sub13" title={<span><Icon type="to-top" /><span>部门关键指标</span></span>}>
							<Menu.Item key="26"><Link to="/ProductService">产品部</Link></Menu.Item>
						</SubMenu>
						<SubMenu key="sub14" title={<span><Icon type="exception" /><span>周报</span></span>}>
							<Menu.Item key="27"><Link to="/WeekReportDetails">周报详情</Link></Menu.Item>
						</SubMenu>
					</Menu>
				</div>
				<div className="right" id="right">
					<BackTop />
					{this.renderChildren(this.props)}
				</div>
				<div className="hide-left-btn" onClick={this.toggleLeftStatus.bind(this)}></div>
			</div>
		);
	}

}

//配置路由
ReactDom.render((
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			//访问根路由的时候，重定向到首页
			<IndexRedirect to="/Index" />
			<Route path="/Index" component={Index} />
			<Route path="/DailyOperation" component={DailyOperation} />
			<Route path="/TodayForecast" component={TodayForecast} />
			<Route path="/MailManagementTask" component={MailManagementTask} />
			<Route path="/MailManagementTaskMail" component={MailManagementTaskMail} />
			<Route path="/MailManagementTemplate" component={MailManagementTemplate} />
			<Route path="/MailManagementTaskLog" component={MailManagementTaskLog} />
			<Route path="/WarnModule" component={WarnModule} />
			<Route path="/WarnIndex" component={WarnIndex} />
			<Route path="/WarnPhone" component={WarnPhone} />
			<Route path="/MessageManagement" component={MessageManagement} />
			<Route path="/AccessLog" component={AccessLog} />
			<Route path="/RechargeReturn" component={RechargeReturn} />
			<Route path="/UserExperience" component={UserExperience} />
			<Route path="/MarketPromotion" component={MarketPromotion} />
			<Route path="/ConsumerActiveUser" component={ConsumerActiveUser} />
			<Route path="/AccessActiveUser" component={AccessActiveUser} />
			<Route path="/PersonTicketDaily" component={PersonTicketDaily} />
			<Route path="/PersonTicketTable" component={PersonTicketTable} />
			<Route path="/BusinessRegisterTable" component={BusinessRegisterTable} />
			<Route path="/BusinessActiveTable" component={BusinessActiveTable} />
			<Route path="/AreaIncome" component={AreaIncome} />
			<Route path="/ProductIncome" component={ProductIncome} />
			<Route path="/OrderSource" component={OrderSource} />
			<Route path="/CompleteOrder" component={CompleteOrder} />
			<Route path="/CarAnalysis" component={CarAnalysis} />
			<Route path="/CarMarketExtension" component={CarMarketExtension} />
			<Route path="/RegisterDriver" component={RegisterDriver} />
			<Route path="/RealtimeOrderHalf" component={RealtimeOrderHalf} />
			<Route path="/ErrorOrder" component={ErrorOrder} />
			<Route path="/DriverOrderPercent" component={DriverOrderPercent} />
			<Route path="/BusinessAccountInfo" component={BusinessAccountInfo} />
			<Route path="/CompetitorPrice" component={CompetitorPrice} />
			<Route path="/CtripAirport" component={CtripAirport} />
			<Route path="/ProductService" component={ProductService} />
			<Route path="/WeekReportDetails" component={WeekReportDetails} />
			<Route path="/Message" component={Message} />
		</Route>
	</Router>
), document.getElementById('main'))