/**
 * @author JUNCHAO KONG
 * @date 2016-10-19
 * @description echarts模块
 */

import React from 'react';
import ReactDom from 'react-dom';
import echarts from 'echarts';

const color = ['#ff6355', '#64dcd3', '#f6c54f', '#5fff89', '#9186d5', '#fe59ed', '#3072f8', '#fbeb3c'];

class Echarts extends React.Component{
	
	constructor(props){
		super(props);
	}
	
	componentWillMount(){
		
	}
	
	componentDidMount(){
		var that = this;
		setTimeout(function(){
			that.drawCharts();
		}, 600)
	}
	
	drawCharts(){
		var myChart = echarts.init(document.getElementById(this.props.id)),
			that = this,
			option = {
				title : {
					text : this.props.option.title || '',
					textStyle : {
						color : '#666666',
						fontSize : '14'
					},
					left : '3%'
				},
				legend : {
					data : (function(){
						var arr = [];
						that.props.option.series.map(function(result){
							arr.push(result.name);
						})
						return arr;
					})(),
					textStyle : {
						color : '#666666'
					},
					right : '3%',
					selectedMode : this.props.option.selectedMode || 'single'
				},
				tooltip : {
					show : true,
					trigger : 'axis',
					triggerOn : 'mousemove',
					lineStyle : {
						color : '#666666'
					}
				},
				grid : {
					left : '3%',
					right : '3%',
					bottom : '14%',
					containLabel : true
				},
				dataZoom : [
					{
						show : true,
						type : 'slider',
						xAxisIndex : [0],
						backgroundColor : '#FFF',
						fillerColor : 'rgba(76, 225, 221, .3)',
						borderColor : 'rgba(0, 0, 0, 0)',
						dataBackground : {
							lineStyle : {
								color : 'rgba(0, 0, 0, 0)'
							},
							areaStyle : {
								color : 'rgba(255, 105, 87, .3)'
							}
						},
						handleIcon : 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
						handleSize : '80%',
						handleStyle : {
							color : '#64dcd3'
						},
						textStyle : {
							color : '#666666'
						},
						left : '14%',
						right : '10%',
						bottom : 0
					}
				],
				xAxis : {
					type : 'category',
					name : this.props.option.xAxis.name,
					nameLocation : 'start',
					nameGap : '25',
					boundaryGap : false,
					data : this.props.option.xAxis.data,
					axisLine : {
						lineStyle : {
							color : '#666666'
						}
					},
					splitLine : {
						show : true,
						lineStyle : {
							color : '#f7f7f7'
						}
					}
				},
				yAxis : [
					{
						type : 'value',
						name : this.props.option.yAxis.name || '',
						axisLine : {
							lineStyle : {
								color : '#666666'
							}
						},
						splitLine : {
							show : true,
							lineStyle : {
								color : '#f7f7f7'
							}
						}
					}
				],
				series : (function(){
					var arr = [];
					that.props.option.series.map(function(result, index){
						arr.push({
							name : result.name,
							type : 'line',
							showAllSymbol : true,
							smooth : true,
							data : result.data,
							lineStyle : {
								normal : {
									color : color[index]
								}
							},
							itemStyle : {
								normal : {
									color : color[index],
									borderWidth : '1',
									borderColor : color[index]
								}
							}
						})
					})
					return arr;
				})()
			};
		myChart.setOption(option);
	}

	render(){
		return (
			<div id={this.props.id} style={{width:'100%', height:'100%'}}></div>
		)
	}

}

export default Echarts;