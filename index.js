const express = require("express")
const app = express();
var bodyParser = require('body-parser')
var fs = require('fs');


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.use('/static', express.static('static'))
//app.use('/', express.static('./'))

const Client = require("replitdb-client");
const client = new Client();

app.use('/api/v1', require('./api'));


app.get('/', function(req, res) {
   res.render("index.html")
});

app.get('/dashboard', function(req, res) {
   res.render("dashboard.html")
});

app.get('/resources', function(req, res) {
   res.render("resources.html")
});

app.get('/acknowledgements', function(req, res) {
   res.render("acknowledgements.html")
});

app.get('/mybadges', function(req, res) {
   res.render("mybadges.html")
});

app.get('/games', function(req, res) {
   res.send("Unfortunately, due to technical difficulties, we could not embed the game onto the website. If you would like to test it, here is the download link: <a href='https://flying-in.space/PZ1JMTgmR2.zip?key=AcdM7aNqyV2s81'> Download Link </a> <br> <br> In the game, you collect food, and the goal is to collect all the food!")
});


app.get("/badges", function(req, res) {
   fs.readFile('badges.json', 'utf8', function (err, data) {
      if (err) throw err;
      obj = JSON.parse(data);
      res.send(obj);
    });
});


let port = 8080;
app.listen(port, () => {
  console.log(`Website listening at http://localhost:${port}`)
});