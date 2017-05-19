/**
 * @author JUNCHAO KONG
 * @date 2016-10-19
 * @description Table模块
 */

import React from 'react';
import ReactDom from 'react-dom';
import { Table, Icon } from 'antd';
import Fetch from './fetch.js';
import '../../css/table_data.scss';

class TableData extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			table_data : [],
			table_columns : [],
			index : 0,
			pagination : {},
			loading : false
		}
	}
	
	componentWillMount(){
		this.setState({
			table_columns : this.props.tableOptions.columns || this.props.tableOptions.source[0].columns
		})
	}
	
	componentDidMount(){
		this.getTableData(1, this.props.params);
	}
	
	componentWillReceiveProps(newProps){
		if(this.props.params !== newProps.params){
			this.getTableData(1, newProps.params);
		}
	}
	
	toggleLoading(){
		this.setState({
			loading : !this.state.loading
		})
	}
	
	//切换表格数据
	changeData(e){
		var key = parseInt(e.target.getAttribute('data-key'));
		if(!key || key - 1 === this.state.index){
			return;
		}
		e.target.parentNode.childNodes[this.state.index].className = '';
		e.target.className = 'active';
		this.setState({
			index : key - 1
		})
		this.getTableData(key, this.props.params);
	}
	
	getTableData(key, params){
		var that = this,
			url = '',
			paramsStr = '';
		this.toggleLoading();
		for(let k in params){
			paramsStr += k + '=' + params[k] + '&';
		}
		if(this.props.tableOptions.source.length !== 0 && this.props.tableOptions.source[key - 1].columns){
			that.setState({
				table_columns : this.props.tableOptions.source[key - 1].columns
			})
		}
		if(this.props.tableOptions.url){
			url = this.props.tableOptions.url + '?' + paramsStr;
		}else{
			url = this.props.tableOptions.source[key - 1].url + '?' + paramsStr;
		}
		console.log(url);
		const useFetch = new Fetch(url, null, function(data){
			that.setState({
				table_data : data,
				pagination : data.length < 11 ? false : {
					total : data.length,
					showSizeChanger : true,
					showQuickJumper : true,
					size : 'normal'
				}
			})
			that.toggleLoading();
		}, function(){
			that.toggleLoading();
		});
		useFetch.getFetch();
	}
	
	render(){
		return (
			<div className="table-box" id={this.props.id || ''}>
				{
					this.props.tableOptions.title ? <h2><Icon type="menu-unfold" />{this.props.tableOptions.title}</h2> : ''
				}
				<p onClick={this.changeData.bind(this)}>
					{
						this.props.tableOptions.source.map(function(data, index){
							return index === 0 ? <span key={data.name} data-key={data.key} className="active">{data.name}</span> : <span key={data.name} data-key={data.key}>{data.name}</span>
						})
					}
				</p>
				<Table 
					columns = {this.state.table_columns}
					dataSource = {this.state.table_data}
					bordered size = "middle"
					pagination = {this.state.pagination}
					loading = {this.state.loading}
					scroll = {{x:true}}
				></Table>
			</div>
		)
	}

}

export default TableData;