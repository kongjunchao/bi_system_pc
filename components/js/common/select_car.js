/**
 * @author JUNCHAO KONG
 * @date 2016-10-19
 * @description 选择车型模块
 */

import React from 'react';
import ReactDom from 'react-dom';
import { Select } from 'antd';
const Option = Select.Option;

//选择车型
class SelectCar extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
		}
	}
	
	selectCity(val){
		console.log(val);
	}
	
	componentWillMount(){
	}
	
	componentDidMount(){
	}

	render(){
		return (
			<Select 
				style = {{width:100}}
				defaultValue = "1"
			>
				<Option value="1">全部</Option>
				<Option value="2">舒适车型</Option>
				<Option value="3">商务车型</Option>
				<Option value="4">豪华车型</Option>
			</Select>
		);
	}

}

export default SelectCar;