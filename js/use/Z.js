define(['base'], function(_PRO_){
  var PDW = _PRO_.PDW, router = _PRO_.Router, _exprots = {};

  _exprots.Z = PDW.createPage({
    name: 'z',
    title: 'Z界面',
    nav: ['Footer', 'Header'],
    route: 'Z',
    view: {
      beforeRender: function() {
        var me = this;
        setTimeout(function(){
          var warper = me.$el.find('h1');
          warper.html('我是界面渲染前执行的方法,此时找不到h1元素的，必须延时。你可以在此处处理初始化数据！使得界面初始化按照非正常顺序渲染！');
        }, 5000)
      },
      afterRender: function() {
        var warper = this.$el.find('h2');
        warper.html('我是界面渲染后执行的方法，可以立即找到元素');
      }
    }
  })
  return _exprots;
});