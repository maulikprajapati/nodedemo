var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var fakeEmployee = require("./fakeEmployee");
app.listen(8001);
var cors = require("cors");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/", function (req, res) {
    res.setHeader("200", { 'Content-Type': 'application/json' });
    res.json({ 'firstName': 'maulik' });
});

app.get("/api/employees", function (req, res) {
    res.setHeader("200", { 'Content-Type': 'application/json' });
    res.json(fakeEmployee.getEmployee());
});

app.post("/api/saveEmployee", function (req, res) {
    console.log(req.body);
    fakeEmployee.addNewNewEmployee(req.body);
    res.setHeader("200", { 'Content-Type': 'application/json' });
    res.json(fakeEmployee.getEmployee());
});

app.get("/api/deleteEmployee/:id", function (req, res) {
    fakeEmployee.deleteEmployee(req.params.id);
    res.setHeader("200", { 'Content-Type': 'application/json' });
    res.json(fakeEmployee.getEmployee());
}); 
console.log("Hello there");