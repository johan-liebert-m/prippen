const http = require('http');
const fs = require('fs');

function error404(res) {
	res.writeHead(404, {'Content-Type': 'text/html'});
	res.write('<h1>Error 404</h1><h2>Not Found</h2>');
	res.end();
}

function onRequest(req, res) {
	if(req.method == 'GET' && req.url == '/') {
		res.writeHead(200, {'Content-type': 'text/html'});
		fs.createReadStream('./prippen.html').pipe(res);
	}
	else {
		error404(res);
	}
}

http.createServer(onRequest).listen(80);