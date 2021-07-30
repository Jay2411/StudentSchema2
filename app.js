const { json } = require("express");;
const express = require('express');
const { request } = require("http");
const path = require('path');
const app = express();

require("./db/conn");
const Index = require("./modules/indexs");
const { isValidObjectId } = require("mongoose");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const static_path = path.join(__dirname, "../");
app.use(express.static(static_path))

const port = 8000;

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html')
})

app.post("/index", async (req, res) => {
  try {
    const registerStudent = new Index({
      name: req.body.name,
      number: req.body.number,
      subject: req.body.subject,
      classs: req.body.classs,
      year: req.body.year,
      society: req.body.society,
    })
    const indexed = await registerStudent.save();
    res.redirect("/");
    console.log('done');
  }
  catch (error) {
    res.redirect("/");
    console.log('not done');
  }
});
app.listen(port, () => {
  console.log('server is running now');
})