var http = require('http')
	const fs = require('fs')

        var server = http.createServer((request, response) =>{
            // http://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/html');

            if (request.url === "/" || request.url === "/home") {
                fs.createReadStream(__dirname + "/html/index.html","utf8").pipe(response);
			}
            else if (request.url === "/contact") {
                fs.createReadStream(__dirname + "/html/contact.html","utf8").pipe(response);
            }
            else {
              fs.createReadStream(__dirname + "/html/404.html","utf8").pipe(response);
			  response.statusCode = 404;
              //response.setHeader('Content-Type', 'text/plain');
              //response.end();
            }
        })

        server.listen(3000, 'localhost')
        console.log("c'est parti")