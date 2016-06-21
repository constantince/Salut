define(['base'], function(_PRO_) {
	//全局依赖变量pdw:创建项目界面模块 e: 公共事件函数 router:路由模块
	var PDW = _PRO_.PDW, router = _PRO_.Router, _exprots = {};
	//课程选择
	_exprots.B = PDW.createPage({
		//视图名称 * 
		name: 'b',
		//本界面的数据 数组下标为参数顺序值 “|”号前面hash值后面传入参数的索引，后面是默认值例如地址栏写入 #B/param1/param2  ==> url 会变成：.....way=param1&aee=param2
		url: 'http://' + IP + ':8800/?way=[0|b]&aee=[1|c]',
		//界面标题 + 无需赘述
		title: 'B界面',
		//配置该页面的导航条
		nav: ['Header'],
		//该界面导航默认数据
		navInfo: {iconRight: 'share'},
		//路由名称 +无需赘述，必须与类名一致，大写开头。如果没有配置路由名称，则该界面没有加入路由规则当中去。一般是弹出界面无需配置此项
		route: 'B(/:param1)(/:param2)',
		view: {
			pageEvent: {
				'tap .tab->tabChange': function(e) {
					var tar = $(e.currentTarget);
					var cls = tar.data('type');
					var father = this.$el;
					if(tar.hasClass('active')) return;
					tar.parent().find('.active').removeClass('active');
					tar.addClass('active');
					father.find('aside .content').addClass('g-d-n');
					father.find('aside .content.' + cls).removeClass('g-d-n');
				},
				'tap .J-refresh-A->refreshChild': function() {
						_exprots.B.children['h'].reloadView({
							word:'hahhahahahahahah'
						});
				},
				'tap h1->toPage': function(e) {
					console.log('hello wrold')
				}
			}
		}
	});

	_exprots.D = PDW.createPage({
		//视图名称 * 
		name: 'd',
		//界面标题 + 无需赘述
		title: 'd界面',
		//本界面请求数据的地址 可以和固定数据融合在一起
		url: 'http://192.168.1.102:8800/?way=d',
		//路由名称 +无需赘述，如果没有配置路由名称，则该界面没有加入路由规则当中去。一般是弹出界面无需配置此项
		route: 'D',
		view: {
			pageEvent: {
				'tap h1->toPage': function() {
					router.myNavigate('A', function() {
						this.A.addDataToModel({
							other: 'ALL INFROMATION FOR PAGE D FROM PAGE C'
						});
					});
				}
			}
		},
		model: {
			defaults: {
				other: ''
			}
		}
	});

	//H界面 隶属于B的子界面需要刷新
	_exprots.H = PDW.createPage({
		//视图名称 * 
		name: 'h',
		//界面标题 + 无需赘述
		// title: 'H界面',
		//声明类型[normal, mask, navigate, child]
		type: 'child',
		url: 'http://' + IP + ':8800/?way=h',
		//声明父级节点的id
		parent: 'b',
		view: {
			scroll: function() {
				console.log('loading.........');
			},
			//如果是刷新界面 需要配置该选项
			pageEvent: {
				'tap h1->toPage': function(e) {
					_exprots.F.hide();
				}
			}
		},
		//缺省的数据模型
		model: {
			defaults: {
				word: 'HHHHHHHHHHH'
			}
		}
	});

	_exprots.K = PDW.createPage({
		//视图名称 * 
		name: 'k',
		//界面标题 + 无需赘述
		title: 'K界面',
		//声明类型[normal, mask, navigate, child]
		type: 'child',
		url: 'http://' + IP + ':8800/?way=h',
		//声明父级节点的id
		parent: 'b',

		view: {
			//在初始化的时候添加规定的class，可以出现滚动效果，scroll是滑倒底部的回调函数。
			scroll: function() {
				console.log('loading.........');
			},
			//如果是刷新界面 需要配置该选项
			pageEvent: {
				'tap h1->toPage': function(e) {
					_exprots.F.hide();
				}
			}
		},
		//缺省的数据模型
		model: {
			defaults: {
				word: 'KKKKKKKKKKKKKKK'
			}
		}
	});

	return _exprots;
});