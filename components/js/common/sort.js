/**
 * @author JUNCHAO KONG
 * @date 2016-10-19
 * @description Sort模块
 */

class Sort{
	
	constructor(){
	}
	
	getSort(str_1, str_2){
		if(!str_1 || !str_2){
			return;
		}
		return Number(str_1.replace(/,|%/g, '')) - Number(str_2.replace(/,|%/g, ''));
	}
}

export default Sort;