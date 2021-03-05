var express = require('express');
var app = express();
const path = require('path');

const port = process.env.PORT || 3000

app.get('/downloads', function (req, res) {
    // res.download(__dirname + `/pdf/page${id}.pdf`);
    console.log(req.body)
});

app.listen(port, () => console.log("listening.."))