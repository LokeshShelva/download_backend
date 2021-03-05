var express = require('express');
var app = express();
const path = require('path');
var bodyParser = require("body-parser");
var fs = require("fs")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const port = process.env.PORT || 3000

var raw = fs.readFileSync(__dirname + "/list.json")
var jsonraw = JSON.parse(raw)
var list = jsonraw["data"]

app.post('/downloads', function (req, res) {

    // res.download(__dirname + `/pdf/page${id}.pdf`);
    var files = path.join(__dirname, "/pdf")
    var name = req.body.Name.toString()
    var Fname = req.body["Father name"].toString()
    var id = -1

    for (var i = 0; i < list.length; i++) {
        if (list[i]["Name"] == name && list[i]["Father Name"] == Fname) {
            id = list[i]["No"]
        }
    }
    if (id != -1) {
        res.status(200).send(JSON.stringify({ "id": id }))
    } else {
        res.status(200).send("No file")
    }
});

app.listen(port, () => console.log("listening.."))