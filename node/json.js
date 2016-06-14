var ip = 'localhost';
var time = new Date();
var year = time.getFullYear();
var month = time.getMonth() + 1;
var date = time.getDate();
var hour = time.getHours();
var min = time.getMinutes();
var sec = time.getSeconds();
console.log(year + '-' + month + '-' + date + ' ' + hour + ':' + min + ':' + sec);

var http=require("http");
var fs = require('fs');
var url = require('url');
var server=http.createServer(function(req, res){//request, response
	var arg = url.parse(req.url, true).query;
	console.log(arg)
    if(req.url!=="/favicon.ico"){
        fs.readFile(arg.way + '.txt', function(err, data){
        	if(err) {
        		console.log('something goes wrong' + err);
        	}else{
                console.log('right')
        		res.writeHead(200, {"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Cache-Control":"max-age=3565585"});
        		var f = res.write(data);
        		res.end();
        	}
        });
    }else{
        res.writeHead(200, {"Content-Type": "text/plain"}); 
        res.write("Hello World Bonjour monde");   
    }
   
});
server.listen(8800, ip, function(){
    console.log("success>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>: start linsteining at " + ip +":8800");
});