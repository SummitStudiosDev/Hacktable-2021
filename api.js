var express = require('express'),
    app = express.Router();

var path = require('path');
const fs = require('fs');
var express = require('express');
//var session = require('express-session');
const Client = require("replitdb-client");
const client = new Client();


app.get('/', function(req, res){
	res.send({'status':'online'});
});


app.get('/get/:id', async function(req, res){
  let dbres = await client.get(req.params["id"], { raw: true });
  if(dbres==""){
    res.send("{}")
  }else{
    res.send(JSON.parse(dbres));
  }
 
});

app.post('/set', async function(req, res){
  console.log(req.body.json)
  await client.set(req.body.id, req.body.json);
  res.send("ok");
});
 
app.get('/purge/:id', async function(req, res){
  await client.delete(req.params["id"]);
  res.send("ok");
});

module.exports = app;