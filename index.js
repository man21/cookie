

const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3002;

app.use('/', express.static(path.join(__dirname, 'HTML')))

//start server
app.listen(port, function () {
    console.log("server connection established");
});





 
