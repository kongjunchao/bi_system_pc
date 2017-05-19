window.onload = function(){
	var canvas = document.getElementById('canvas'),
		context = canvas.getContext('2d'),
		canvasWidth,
		canvasHeight;
	canvas.width = canvasWidth = window.innerWidth;
	canvas.height = canvasHeight = window.innerHeight;
	
	var APP = {
		//配置信息
		Dots : {
			number : 50,			//粒子数量
			dis : 200,				//距离多远会连线
			array : [],				//存放单个粒子信息
			radiusArr : [],			//存放单个粒子半径
			lineColor : '#eaebec',	//连线颜色
			cycleColor : '#eaebec'	//粒子颜色
		},
		init : function(){
			this.drawBg(context);
			this.draw();
		},
		//绘制背景
		drawBg : function(context){
			context.beginPath();
			context.fillStyle = '#f7fafc';
			context.fillRect(0, 0, canvasWidth, canvasHeight);
			context.save();		
		},
		//初始化粒子信息
		draw : function(){
			//构造函数，创建粒子
			function Dot(){
				//圆心坐标
				this.x = Math.round(Math.random() * canvasWidth);
				this.y = Math.round(Math.random() * canvasHeight);
				//移动速度
				this.vx = (Math.random() - 0.5) * 3;
				this.vy = (Math.random() - 0.5) * 3;
				//半径
				this.radius = Math.round(Math.random() * 20);
			}
			Dot.prototype.draw = function(){
				context.beginPath();
				context.fillStyle = APP.Dots.cycleColor;
				context.arc(this.x, this.y, this.radius, 0, 360, false);
				context.fill();
			}
			//创建粒子放入数组
			for(var i = 0; i < this.Dots.number; i++){
				var dotObj = new Dot();
				this.Dots.array.push(dotObj);
				this.Dots.radiusArr.push(dotObj.radius);
			}
			this.start();
		},
		//绘制粒子
		drawDots : function(){
			this.drawBg(context);
			for(var i = 0; i < this.Dots.number; i++){
				this.Dots.array[i].draw();
			}
		},
		//移动粒子
		moveDots : function(){
			for(var i = 0; i < this.Dots.number; i++){
				var dot = this.Dots.array[i];
				if(dot.x < 0 || dot.x > canvasWidth){
					dot.vx = -dot.vx;
				}
				if(dot.y < 0 || dot.y > canvasHeight){
					dot.vy = -dot.vy;
				}
				dot.x += dot.vx;
				dot.y += dot.vy;
			}
		},
		//连线粒子
		lineDots : function(){
			for(var i = 0; i < this.Dots.number; i++){
				for(var j = 0; j < this.Dots.number; j++){
					if(Math.abs(this.Dots.array[i].x - this.Dots.array[j].x) <= this.Dots.dis && Math.abs(this.Dots.array[i].y - this.Dots.array[j].y) <= this.Dots.dis){
						context.lineWidth = 0.2;
						context.beginPath();
						context.strokeStyle = this.Dots.lineColor;
						context.moveTo(this.Dots.array[i].x, this.Dots.array[i].y);
						context.lineTo(this.Dots.array[j].x, this.Dots.array[j].y);
						context.stroke();
					}
				}
			}
		},
		start : function(){
			var that = this;
			setInterval(function(){
				context.clearRect(0, 0, canvasWidth, canvasHeight);
				that.moveDots();
				that.drawDots();
				that.lineDots();
			}, 60)
		}
	}
	
	APP.init();
}