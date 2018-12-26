var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')
var app = express()
var history = require('connect-history-api-fallback')
var port = process.env.PORT || 5000

app.use(history())
app.use(serveStatic(path.resolve(__dirname) + '/dist'))

app.listen(port)
console.log('server started ' + port)
