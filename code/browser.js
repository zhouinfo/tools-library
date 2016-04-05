//浏览器信息
var Browser = function(userAgent){
	var u = userAgent||navigator.userAgent;
	var _this = this;
	var match = {
		//内核
		Trident: u.indexOf('Trident')>0,
		Presto: u.indexOf('Presto')>0,
        WebKit: u.indexOf('AppleWebKit')>0,
        Gecko: u.indexOf('Gecko')>0,
		//浏览器
		UC: u.indexOf('UC')>0||u.indexOf('UBrowser')>0,
		QQ: u.indexOf('QQBrowser')>0,
		BaiDu: u.indexOf('Baidu')>0||u.indexOf('BIDUBrowser')>0,
		Maxthon: u.indexOf('Maxthon')>0,
		SouGou: u.indexOf('MetaSr')>0||u.indexOf('Sogou')>0,
		IE: u.indexOf('MSIE')>0,
		Firefox: u.indexOf('Firefox')>0,
		Opera: u.indexOf('Opera')>0||u.indexOf('OPR')>0,
		Safari: u.indexOf('Safari')>0,
		Chrome:u.indexOf('Chrome')>0||u.indexOf('CriOS')>0,
		//系统或平台
		Windows:u.indexOf('Windows')>0,
		Mac:u.indexOf('Macintosh')>0,
		Android:u.indexOf('Android')>0||u.indexOf('Adr')>0,
		WP:u.indexOf('IEMobile')>0,
		BlackBerry:u.indexOf('BlackBerry')>0||u.indexOf('RIM')>0||u.indexOf('BB')>0,
		MeeGo:u.indexOf('MeeGo')>0,
		Symbian:u.indexOf('Symbian')>0,
		iOS:u.indexOf('like Mac OS X')>0,
		iPhone: u.indexOf('iPh')>0,
		iPad:u.indexOf('iPad')>0,
		//设备
		Mobile:u.indexOf('Mobi')>0||u.indexOf('iPh')>0||u.indexOf('480')>0,
		Tablet:u.indexOf('Tablet')>0||u.indexOf('iPad')>0||u.indexOf('Nexus 7')>0
	}
	//修正
	if(!match.Trident){
		match.Trident = match.IE;
	}
	if(match.Gecko){
		match.Gecko = !match.WebKit;
	}
	if(match.Chrome){
		match.Chrome = !(match.Opera + match.BaiDu + match.Maxthon + match.SouGou + match.UC + match.QQ);
	}
	if(match.Safari){
		match.Safari = !(match.Chrome + match.Opera + match.BaiDu + match.Maxthon + match.SouGou + match.UC + match.QQ);
	}
	if(match.Mobile){
		match.Mobile = !match.iPad;
	}
	//信息输出
	var hash = {
		engine:['Trident','Presto','WebKit','Gecko'],
		browser:['UC','QQ','BaiDu','Maxthon','SouGou','IE','Firefox','Opera','Safari','Chrome'],
		os:['Windows','Mac','Android','WP','BlackBerry','MeeGo','Symbian','iOS','iPhone','iPad'],
		device:['Mobile','Tablet']
	};
	_this.device = 'PC';
	_this.language = (function(){
		var g = (navigator.browserLanguage || navigator.language).toLowerCase();
		return g=="c"?"zh-cn":g;
	})();
	for(var s in hash){
		for(var i=0;i< hash[s].length;i++){
			var value = hash[s][i];
			if(match[value]){
				_this[s] = value;
			}
		}
	}
};