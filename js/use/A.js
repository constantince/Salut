define(['base'], function(_PRO_) {
	//全局依赖变量pdw:创建项目界面模块 e: 公共事件函数 router:路由模块
	var PDW = _PRO_.PDW, router = _PRO_.Router, _exprots = {};
	//定义一个事件公共方法
	function refreshPage(e) {
		_exprots.A.children['g'].reloadView({
			word: 'bonjour mademoiselle, je suis programs'
		});
	}
	//A界面
	_exprots.A = PDW.createPage({
		//视图名称 * 
		name: 'a',
		//界面标题 + 无需赘述
		title: 'A界面',
		//切换界面时是否刷新本界面
		applyChange: false,
		//路由名称 +无需赘述，如果没有配置路由名称，则该界面没有加入路由规则当中去。一般是弹出界面无需配置此项
		route: 'A',
		//界面加载需要的数据地址
		url: 'http://' + IP + ':8800/?way=a',
		//配置该页面的导航条
		nav: ['Footer', 'Header'],
		//本界面导航呈现的数据模型
		navInfo: {iconLeft: 'lattice', iconRight: 'me'},
		//backbone的界面扩展数据
		view: {
			//渲染之前的调用函数
			beforeRender: function() {

			},
			//渲染界面后的回调函数
			afterRender: function() {
				//console.log(this.$el);
			},
			//注册界面事件
			pageEvent: {
				/*自定义事件 事件名 事件绑定元素-> 事件执行的方法名 : 事件的注册方法
				 同样的方法会叠加，如C界面也有toPage，那么执行完C界面的toPage方法之后会 回执行此处方法,
				 这个前提是tap目标选择器和父级一样，因为子界面在父界面之下，父界面的方法会捕获子界面方法
				*/
				'tap .J-async-module->goPageB': function(e) {
					//A:模块名称 C:路由名称 function.....:回掉函数。this上下文指向B文件中的的B界面对象
					router.myNavigate('B/b/n', function(){

							// this.children['h'].reloadView({
							// 	word: 'I AM OTERHS INFOMATION FORM PAGE A'
							// });
							// this.children['k'].reloadView({
							// 	word: 'IT IS WORK'
							// });
							// this.reloadAllChildren({word:'all reload'});
					});
				},
				'tap .J-refresh->refreshPage': refreshPage,
				'tap .J-changeNav->changeNavA': function() {
						_exprots.A.children['i'].reloadView({
							word: '12121212121212'
						});
				},
				'tap .J-local-module->goPageC': function() {
					router.myNavigate('C', function() {
						this.addDataToModel({
							message: 'hello i am a message from page A'
						})
					});
				}
			}
		},
		//缺省模型数据
		model: {
			defaults: {
				say: 'hello',
				List: 'a ha good morning',
				other: ''
			}
		}
	});
	//C界面
	_exprots.C = PDW.createPage({
		//视图名称 * 
		name: 'c',
		//界面标题 + 无需赘述
		title: 'c界面',
		//路由名称 +无需赘述，如果没有配置路由名称，则该界面没有加入路由规则当中去。一般是弹出界面无需配置此项
		route: 'C',
		url: 'http://' + IP + ':8800/?way=c',
		view: {
			pageEvent: {
				'tap h1->toPage': function(e) {
					router.myNavigate('D', function() {
						this.D.addDataToModel({
							other: 'ALL INFROMATION FOR PAGE D FROM PAGE C'
						})
					});
				}
			}
		},
		model: {
			defaults: {
				message: 'hello'
			}
		}
	});
	//F界面 属于弹出窗口
	_exprots.F = PDW.createPage({
		//视图名称 * 
		name: 'f',
		//界面标题 + 无需赘述
		title: 'F界面',
		//路由名称 +无需赘述，如果没有配置路由名称，则该界面没有加入路由规则当中去。一般是弹出界面无需配置此
		//声明类型
		type: 'mask',
		//申明界面出现动画的方向 和距离
		direction: 'right->80',
		view: {
			pageEvent: {
				'tap h1->toPage': function(e) {
					refreshPage(e);
					_exprots.F.hide();
				}
			}
		},
		model: {
			defaults: {
				say: 'hello',
				name: 'C',
				other: 'ccccccc'
			}
		}
	});
	//G界面 隶属于A的子界面需要刷新
	_exprots.G = PDW.createPage({
		//视图名称 * 
		name: 'g',
		//界面标题 + 无需赘述
		title: 'G界面',
		//声明类型[normal, mask, navigate, refresh]
		type: 'refresh',
		//声明父级节点的id
		parent: 'a',
		view: {
			//如果是刷新界面 需要配置该选项
			pageEvent: {
				'tap h1->toPage': function(e) {
					console.log(this.$el);
				}
			}
		},
		//缺省的数据模型
		model: {
			defaults: {
				word: 'GGGGGGGGGGGG'
			}
		}
	});
	//I界面 隶属于A的子界面需要刷新
	_exprots.I = PDW.createPage({
		//视图名称 * 
		name: 'i',
		//界面标题 + 无需赘述
		title: 'i界面',
		//声明类型[normal, mask, navigate, refresh]
		type: 'refresh',
		//声明父级节点的id
		parent: 'a',
		view: {
			//如果是刷新界面 需要配置该选项
			pageEvent: {
				'tap h2->toPage': function(e) {
					console.log(this.$el);
				}
			}
		},
		//缺省的数据模型
		model: {
			defaults: {
				word: 'IIIIIIIIIIIII'
			}
		}
	});

	return _exprots;
});