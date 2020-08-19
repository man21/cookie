const express = require('express')
const app = express()
const port = 3001

var http = require('http');
var fs = require('fs');

const PORT=  process.env.PORT || 8080 ; 

// app.get('/', (req, res) => res.send('Hello World!'))

// app.use('/', express.static('/'));


fs.readFile('./example.html', function (err, html) {

    if (err) throw err;    

    http.createServer(function(request, response) {  
        response.writeHeader(200);  
        response.write(html);  
        response.end();  
    }).listen(PORT);
});

// app.listen(port, () => console.log(`Example app listening on port ${port}!`))
