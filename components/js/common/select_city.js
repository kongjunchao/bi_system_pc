/**
 * @author JUNCHAO KONG
 * @date 2016-10-19
 * @description 选择城市模块
 */

import React from 'react';
import ReactDom from 'react-dom';
import { Select } from 'antd';
const Option = Select.Option;

//选择城市
class SelectCity extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			city : this.props.city
		}
	}
	
	componentWillMount(){
	}
	
	componentDidMount(){
	}
	
	componentWillReceiveProps(newProps){
		if(this.props.city !== newProps.city){
			this.setState({
				city : newProps.city
			})
		}
	}

	render(){
		return (
			<Select 
				showSearch
				style = {{width:100}}
				defaultValue = {this.state.city}
				optionFilterProp = "children"
				onChange = {this.props.selectCity}
				notFoundContent = ""
			>
				<Option value="全国">全国</Option>
				<Option value="北京">北京</Option>
				<Option value="上海">上海</Option>
				<Option value="广州">广州</Option>
				<Option value="深圳">深圳</Option>
				<Option value="南京">南京</Option>
			</Select>
		);
	}

}

export default SelectCity;