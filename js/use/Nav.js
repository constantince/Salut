define(['salut'], function(_PRO_) {
	//全局依赖变量pdw:创建项目界面模块 e: 公共事件函数 router:路由模块
	var PDW = _PRO_.PDW, router = _PRO_.Router, _exprots = {};
	//将视图模块导入缓存中
	PDW.Observer.add('Nav', function() {
		return _exprots;
	});
	//底部导航
	_exprots.Footer = PDW.createPage({
		//视图名称 * 
		name: 'footer',
		//界面类型
		type: 'navigate',
		//切换时是否需要刷新界面
		applayChange: true,
		view: {
			//渲染界面前的回掉
			beforeRender: function() {
				// var activePageModule = PDW.getActiveRoute();
				// var info = activePageModule.getOptions().navInfo;
				// this.model.set(info);
			},
			//注册界面事件
			pageEvent: {
				//为mui-tab-item的类元素添加一个tap事件，事件名为routeNavigate
				'tap .mui-tab-item->routeNavigate': function(e) {
					var tar = $(e.target);
					tar = tar[0].nodeName === 'A'? tar : tar.parent();
					var propeites = tar.data('n');
					var path = propeites.split('-');
				}
			}
		},
		//界面默认的数据
		model: {
			defaults: {
				List:[{Module:'Home', Route:'Home', Name:'首页', icon:'home'}, {Module:'Center', Route:'Center', Name:'我的', icon:'contact' }],
				active: 'Home',
				defaultPage: 0
			}
		}
	});
	//顶部导航
	_exprots.Header = PDW.createPage({
		//视图名称 * [header, footer, aside, section]
		name: 'header',
		//界面类型
		type: 'navigate',
		applayChange: true,
		view: {
			//渲染界面后的回掉
			beforeRender: function() {
				//向模型中输入新的数据
				var activePageModule = PDW.getActiveRoute();
				var title = activePageModule.getOptions().title;
				this.model.set({name: title});
				//console.log(PDW.getActiveRoute());
			},
			//注册界面事件
			pageEvent: {
				//回退图标
				'tap a.icon-back->back': function() {
					window.history.go(-1)
				},
				//登录图标
				'tap a.icon-login->login': function() {

				},
				//栅格图标
				'tap a.icon-lattice->slideLeft': function() {
					//显示左侧框
					PDW.Observer.get('m').show();
				},
				//分享图标
				'tap a.icon-share->share': function() {

				},
				//个人中心图标
				'tap a.icon-me->me': function() {
					router.myNavigate('F');
				}
			}
		},
		//顶部导航的默认数据
		model: {
			defaults: {
				name: '首页',
				iconLeft: 'back',
				iconRight: ''
			}
		}
	});
	return _exprots;
});