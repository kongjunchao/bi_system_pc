## BI PC 项目

#### 开发环境
* Node 6.9.4

#### 开发工具
* HBuilder 7.6.2

#### 框架
* React 15.3.2

#### UI
* Ant Design 2.4.2

#### 插件
* 根目录下-package.json

#### 打包工具
* Webpack 1.13.3

#### 预览地址
[点击](http://kongjunchao.com/app/bi_pc/login.html)

#### 测试环境
webpack.config.js为webpack测试环境下的配置文件，package.json文件存放依赖模块
项目根目录下执行命令“npm start”，浏览器访问localhost:7777/login.html即可

#### 生产环境
webpack.production.config.js为webpack生产环境下的配置文件，package.json文件存放依赖模块
项目根目录下执行命令“npm run build”，dist文件夹中会自动生成压缩合并后的js和css文件，注意vendor.min.js仅用于提取公共js文件，并无用途，实际上线可删除

#### 组件相关
项目中所使用的组件存放在components/js文件夹中，其中common文件夹中存放公共组件

#### 页面结构
	项目入口文件
	main.js

	顶部入口
		消息
		message.js

	左侧导航入口
		报表
			首页
			index.js

			运营日报
			daily_operation.js
		
			今日预测
			today_forecast.js
		
		工具
			邮件管理系统
				任务管理
				mail_management_task.js
				
				任务邮箱管理
				mail_management_task_mail.js
				
				模板管理
				mail_management_template.js
				
				任务日志
				mail_management_task_log.js
				
			预警管理系统
				预警模块
				warn_module.js
				
				预警指标
				warn_index.js
				
				预警手机号
				warn_phone.js
				
			公告管理
			message_management.js
			
			访问日志
			access_log.js
		
		项目分析
			充值返现
			recharge_return.js
			
			用户体验
			user_experience.js
		
		用户
			市场推广
			market_promotion.js
			
			消费活跃用户
			consumer_active_user.js
			
			访问活跃用户
			access_active_user.js
			
			个人用券监控日报
			person_ticket_daily.js
			
			个人用券监控报表
			person_ticket_table.js
		
		企业用户
			企业注册报表
			business_register_table.js
			
			企业激活报表
			business_active_table.js
		
		订单
			地域收入
			area_income.js
			
			产品收入
			product_income.js
			
			订单来源
			order_source.js
			
			完成订单
			complete_order.js
		
		车源
			车源分析
			car_analysis.js
			
			车源市场推广
			car_market_extension.js
			
			注册司机
			register_driver.js
		
		派单
			实时派单半小时
			realtime_order_half.js
			
			失败订单
			error_order.js
			
			司机接单率
			driver_order_percent.js
		
		财务
			企业账户信息
			business_account_info.js
		
		竞品
			竞品价格
			competitor_price.js
			
			携程接送机
			ctrip_airport.js
		
		部门关键指标
			产品部
			product_service.js
		
		周报
			周报详情
			week_report_details.js