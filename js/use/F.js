define(['salut'], function(_PRO_) {
  //全局依赖变量pdw:创建项目界面模块 e: 公共事件函数 router:路由模块
  var PDW = _PRO_.PDW, router = _PRO_.Router, _exprots = {};
  //F界面
  _exprots.F = PDW.createPage({
    //视图名称 * 
    name: 'f',
    //界面标题 + 无需赘述
    title: 'F界面',
    applyChange: false,
    //路由名称 +无需赘述，如果没有配置路由名称，则该界面没有加入路由规则当中去。一般是弹出界面无需配置此项
    route: 'F',
    //界面加载需要的数据地址
    // url: 'http://' + IP + ':8800/?way=a',
    //配置该页面的导航条
    nav: ['Header'],
    //本界面导航呈现的数据模型
    // navInfo: {iconLeft: 'lattice', iconRight: 'me'},
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
        'tap .J-refresh-p->freshP': function(e) {
          _exprots.F.children['p'].reloadView({
            message: 'refreshed!!!'
          });
        },
        'tap .J-refresh-y->freshY': function(e) {
          _exprots.F.children['y'].reloadView({
            word: 'refreshed!!!'
          });
        },
        'tap .J-refresh-all->freshAll': function(e) {
          _exprots.F.reloadAllChildren({word:'all reload', message: 'yes!!!'});
        },
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
  //P界面
  _exprots.P = PDW.createPage({
    //视图名称 * 
    name: 'p',
    //界面标题 + 无需赘述
    title: 'p界面',
    //路由名称 +无需赘述，如果没有配置路由名称，则该界面没有加入路由规则当中去。一般是弹出界面无需配置此项
    // route: 'P',
    type:'child',
    parent: 'f',
    // url: 'http://' + IP + ':8800/?way=c',
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
        message: '我是P界面，可以队伍进行刷新 复制等操作，我的父级界面是F'
      }
    }
  });
  //Y界面 隶属于A的子界面需要刷新
  _exprots.Y = PDW.createPage({
    //视图名称 * 
    name: 'y',
    //界面标题 + 无需赘述
    title: 'Y界面',
    //声明类型[normal, mask, navigate, child]
    type: 'child',
    //声明父级节点的id
    parent: 'f',
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
        word: '我是Y界面可以对我进行刷新等动作，刷新方法为_exprots.(Father-module).children[(child-id)].reloadView(obj);'
      }
    }
  });
  //U界面 隶属于A的子界面需要刷新
  _exprots.U = PDW.createPage({
    //视图名称 * 
    name: 'u',
    //界面标题 + 无需赘述
    title: 'i界面',
    //声明类型[normal, mask, navigate, child]
    type: 'child',
    //声明父级节点的id
    parent: 'f',
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