var express = require('express');
var app = express();
const path = require('path');

app.get('/downloads', function (req, res) {
    // res.download(__dirname + `/pdf/page${id}.pdf`);
    console.log(req.body)
});

app.listen(3000, () => console.log("listening.."))