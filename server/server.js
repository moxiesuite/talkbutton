const express = require('express');
const path = require("path");
const faye = require('faye/src/faye_node');
const http = require('http');

var app = express();

app.use("/", express.static('dist'))
app.use("*", express.static('dist'))

// Start your app.
app.listen(3000, "127.0.0.1", async err => {
  if (err) {
    return console.log(err);
  }
  console.log("Server started...");
});

var wsserver = http.createServer(),
bayeux = new faye.NodeAdapter({mount: '/__connect', timeout: 45});
bayeux.attach(wsserver);
wsserver.listen(8000);

bayeux.on('handshake', function(clientId) {
  console.log('Client connected', clientId);
});

bayeux.getClient().subscribe('/*', function(message) {
  // handle message
  console.log(message)
});