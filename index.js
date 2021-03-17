var express = require('express');
const path = require('path');
var bodyParser = require("body-parser");
var fs = require("fs")
var cors = require("cors")

var app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

const port = process.env.PORT || 3000

var raw = fs.readFileSync(__dirname + "/list.json")
var jsonraw = JSON.parse(raw)
var list = jsonraw["data"]

app.post('/downloads', function (req, res) {

    var name = req.body.Name.toString()
    var Fname = req.body["Father Name"].toString()
    var phone = req.body["Phone Number"].toString()
    var dob = req.body["DOB"].toString()
    var id = -1

    for (var i = 0; i < list.length; i++) {
        if (list[i]["Name"] == name && list[i]["Father Name"] == Fname) {
            if (list[i]["Phone"].includes(phone) || list[i]["DOB"] == dob) {
                id = list[i]["No"]
                break
            }
        } else if (list[i]["Name"] == name || list[i]["Father Name"] == Fname) {
            if (list[i]["Phone"].includes(phone) || list[i]["DOB"] == dob) {
                id = list[i]["No"]
                break
            }
        } else {
            if (list[i]["Phone"].includes(phone) && list[i]["DOB"] == dob) {
                id = list[i]["No"]
                break
            }
        }
    }
    res.status(200).send(JSON.stringify({ "id": id }))

});

app.get('/admit', (req, res) => {
    var id = req.query.id
    res.download(__dirname + `/pdf/page${id}.pdf`)
})

app.listen(port, () => console.log("listening.."))