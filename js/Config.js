define(function(){
	//配置文件
	return {
		//模块跳转规则，在需要跳到下一个模块的默认方法需要配置
		PAGERULES: {
			A: ['a', 'c', 'g', 'i'],
			B: ['b', 'd', 'h', 'k'],
			F: ['f', 'p', 'y', 'u'],
			Z: ['z'],
			Nav: ['footer', 'header']
		},
		//入口界面,即如果地址栏中没有输入hash 跳入哪个界面
		entrePage: 'A',
		//公共文件的名称
		commonJsModule: 'Nav',
		//界面切换动画时长 单位毫秒
		pageTransformDelay: 300,
		//动画弹出时长
		maskTransformDelay: 300,
		//html模板文件加载的路径配置
		loadHtmlPath: 'js/tpl/tpl',
		//模块文件加载的路径配置
		loadJsPath: 'use/',
		//ajax请求超时时间
		ajaxDelay: 7000
	}
});