# SalutJs 单页应用脚手架
---
##简介
`salutjs`是一种为快速搭建H5单页应用的脚手架。它的底层代码是建立在backboneJS上的。通过对backbone进步一封装和改进，将创建单页应用的过程简单化。通过一些简单的配置快速建立单一界面应用。一下是它的一些使用方法。
##核心对象
PDW为该脚手架的核心对象，它的API如下:
>`Observer` : 获取界面对象
```javascript
PDW.Observer.get('xxx');
```

>`getViewOrder`: 获取切换界面的列表
```javascript
PDW.getViewOrder();
```

>`getPreView`: 获取上一个界面的名称
```javascript
PDW.getPreView();
```

>`ajax`: 自定封装的ajax请求
```javascript
PDW.ajax();
```

>`getActiveRoute`: 获取当前路由的名称
```javascript
PDW.getActiveRoute();
```

>`getModule`: 获取某个backbone的模型
```javascript
PDW.getActiveRoute();
```

>`createPage`: 创建一个界面对象
```javascript
PDW.getActiveRoute();
```

>`getParams`: 获取地址栏参数
```javascript
PDW.getActiveRoute();
```

>`verifly`: 返回验证函数
```javascript
PDW.verifly();
```

>`filterHash`: 根据配置，返回对应的js文件名
```javascript
PDW.filterHash();
```

###创建一个界面
```javascript
//创建一个界面
var page = PDW.createPage(); 
```
该函数接受一个json形式的参数。以下是它接受参数的名以及它们的意义:
>*为必填参数   +为可选
>{
>>name: 'a' 视图名称 *
>>title: 'A界面' +
>>applyChange: false + 重新切换到该视图时是否刷新当前界面数据 默认true
>>type: mask + 该视图的类型 总共有以下几种类型 [normal, mask, navigate, child], 默认normal
>>parent: 'x' + 视图的父级视图id，只有当type为child时需要指定parent 
>>direction: 'right->80' + 视图出现的方向和视图的宽度，只有当type为mask时需要指定。
>>route: 'xxxx(/:param)' + 视图对应的hash路由，type为normal的时候需要设置 
>>url: 'xxxxxx?a=[param|0]' + 视图需要去某个路径拉取的数据地址，如果界面数据来自服务器，需要配置此项。hash指后面的参数可以作为缩影在url中使用：如hash/param1,在url中可以这样获取param1， xxxx?a=[0|defaultstring],0即为地址栏中第一个参数
>>nav：['header'] +
>>navInfo: {xxxxx:xxxxx} + 当前nav需要的数据
>>view +
>>>scroll: func 如果该界面有需要下拉刷新的动作，需要配置刷新的回调函数
>>>beforeRender: func 界面渲染钱执行的函数
>>>afterRender: func 界面渲染后执行的函数
>>>pageEvent: obj 界面的各种事件行为
>>>>'tap .class->funcName': func 

>>model+ 界面的缺省数据
>>defaults: obj

>}




