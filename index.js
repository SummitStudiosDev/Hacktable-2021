const express = require("express")
const app = express();
var bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.use('/static', express.static('public'))

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

let port = 8080;
app.listen(port, () => {
  console.log(`Website listening at http://localhost:${port}`)
});