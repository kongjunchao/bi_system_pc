## 数据可视化BI系统

#### 开发环境
* Node 6.9.4

#### 开发工具
* Sublime
* HBuilder 7.6.2

#### 框架
* React 15.3.2

#### UI
* Ant Design 2.4.2

#### 插件
* 根目录下-package.json
* 通过“npm install”自动安装package.json中的所有依赖插件，需要注意的是，各插件工具的版本一直在迭代更新，会出现不兼容的可能性，有时需要自己修改下webpack配置文件中的一些语法规则，install的时候会有报错提示，这个坑我也踩了很多遍了，推荐自己去看一下webpack的使用方法，按照依赖包重新装一遍

#### 打包工具
* Webpack 1.13.3

#### 数据请求
* 项目是使用Fetch作为请求方式，但该项目源码只是初期原型，并没有涉及到真正的请求接口，仅有部分随机生成的模拟数据供展示，需要自己写一下这块内容

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

#### 项目展示
![](http://kongjunchao.com/app/images/img_01.png)
![](http://kongjunchao.com/app/images/img_02.png)
![](http://kongjunchao.com/app/images/img_03.png)
![](http://kongjunchao.com/app/images/img_04.png)
![](http://kongjunchao.com/app/images/img_05.png)