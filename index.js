var express = require('express'),
    cors = require('cors'),
    secure = require('ssl-express-www' ),
  var PORT = process.env.PORT || 80,
path = require('path');

var mainrouter = require('./main')

var app = express()
app.enable('trust proxy');
app.set("json spaces",2)
app.use(cors())
//app.use(secure)
app.use(express.static(path.join(__dirname + "/public")))

app.use('/', mainrouter)

app.listen(PORT, () => {
    console.log("Server running on port " + PORT)
})

module.exports = app
