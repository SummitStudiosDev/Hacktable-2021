const express = require("express")
const app = express();
var bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.use('/static', express.static('public'))


app.get('/', function(req, res) {
   res.render("index.html")
});

app.get('/dashboard', function(req, res) {
   res.render("dashboard.html")
});

let port = 8080;
app.listen(port, () => {
  console.log(`Website listening at http://localhost:${port}`)
});