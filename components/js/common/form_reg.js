/**
 * @author JUNCHAO KONG
 * @date 2016-10-19
 * @description 表单正则验证模块
 */

class FormReg{
	
	constructor(){
	}
	
	//判断是否为空，真为空，假为非空
	isEmpty(str){
		return !str.trim() ? true : false;
	}
	
	//限制长度，真为在范围内，假为不在范围内
	isLength(str, min, max){
		var str = str.trim(),
			min = min || 0,
			max = max || 100;
		if(str.length >= min && str.length <= max){
			return true;
		}else{
			return false;
		}
	}

	//判断是否为数字，真为数字，假为非数字
	isNumber(num){
		var num = num.trim();
		if(!isNaN(num) && num !== ""){
			return true;
		}else{
			return false;
		}
	}

	//判断是否为手机号，真为手机号，假为非手机号
	isPhone(str){
		var str = str.trim();
		if(/^(0|86|17951)?(13[0-9]|15[012356789]|18[0-9]|14[57]|17[0-9])[0-9]{8}$/.test(str)){
			return true;
		}else{
			return false;
		}
	}

	//判断是否为邮箱地址，真为邮箱地址，假为非邮箱地址
	isEmail(str){
		var str = str.trim();
		if(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(str)){
			return true;
		}else{
			return false;
		}
	}

	//判断是否为QQ号，真为QQ号，假为非QQ号
	isQQ(str){
		var str = str.trim();
		if(/^[1-9]\d{4,}$/.test(str)){
			return true;
		}else{
			return false;
		}
	}

	//判断是否为URL地址，真为URL地址，假为非URL地址
	isURL(str){
		var str = str.trim();
		if(/^[a-zA-Z]+[://][^\s]*$/.test(str)){
			return true;
		}else{
			return false;
		}
	}

	//判断是否为汉字，真为汉字，假为非汉字
	isChinese(str){
		var str = str.trim();
		if(/^[\u4e00-\u9fa5]+$/.test(str)){
			return true;
		}else{
			return false;
		}
	}

	//判断是否为汉字、字母、数字，真为匹配，假为不匹配
	isChineseOrEnglishOrNum(str){
		var str = str.trim();
		if(/^([\u4e00-\u9fa5]|[a-zA-Z]|[0-9])+$/.test(str)){
			return true;
		}else{
			return false;
		}
	}

	//判断是否为邮编，真为邮编，假为非邮编
	isPostCode(str){
		var str = str.trim();
		if(/^[1-9]\d{5}$/.test(str)){
			return true;
		}else{
			return false;
		}
	}

	//判断是否为身份证号码，真为身份证号码，假为非身份证号码
	isIDNumber(str){
		var str = str.trim();
		if(/^\d{15}(\d\d[0-9xX])?$/.test(str)){
			return true;
		}else{
			return false;
		}
	}

	//判断是否为正整数（不包含0），真为正整数，假为非正整数
	isPositiveInteger(str){
		var str = str.trim();
		if(/^[0-9]*[1-9][0-9]*$/.test(str)){
			return true;
		}else{
			return false;
		}
	}

	//判断是否为非负整数（正整数或0），真为匹配，假为不匹配
	isPositiveIntegerOrZero(str){
		var str = str.trim();
		if(/^\d+$/.test(str)){
			return true;
		}else{
			return false;
		}
	}
}

export default FormReg;