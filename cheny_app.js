var IP = '172.16.0.189';
// var IP = '192.168.1.102';
// var IP = '192.168.31.101';
require.config({
	baseUrl: 'js/',
	urlArgs:'version=1.0',
	paths: {
		base: 'base/base',
		config: 'Config'
	}
});
//require(function(base, page) {
(function(root){
	require(['config'], function(C){
		console.log(C)
		var hash = root.location.hash.replace(/^#\/?/gi, '');
		if(hash.indexOf('?')> -1 ) {
			hash = hash.split('?')[0];
		}
		var config = C.PAGERULES;
		if(hash.indexOf('/')) {
			hash = hash.split('/')[0].toLocaleLowerCase();
		}
		for(var i in config) {
			if(config[i].indexOf(hash) >-1 ) hash = i;
		} 
		hash != '' ? hash: 'A';

		require([C.loadJsPath + hash], function(){
			Backbone.history.start();
		});
	});
	
	//page(base);
	//Backbone.history.start();	
})(window);