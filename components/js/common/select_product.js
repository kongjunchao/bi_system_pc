/**
 * @author JUNCHAO KONG
 * @date 2016-10-19
 * @description 选择产品模块
 */

import React from 'react';
import ReactDom from 'react-dom';
import { Select } from 'antd';
const Option = Select.Option;

//选择产品
class SelectProduct extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
		}
	}
	
	selectProduct(val){
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
				<Option value="2">时租-包时</Option>
				<Option value="3">定价-接机</Option>
			</Select>
		);
	}

}

export default SelectProduct;