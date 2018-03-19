const path = require('path');
const http = require ('http');
const express = require('express');
const socketIO  = require ('socket.io');


const publicPath = path.join(__dirname, '../public');
const port  = process.env.PORT || 4000;


var app = express();
var server = http.createServer(app ); 
var io = socketIO(server);

app.use(express.static(publicPath));
io.on('connection',(socket)=> {
    console.log('new user conncted');
    socket.emit('newEmail',{
        email: 'nick@gmail.com'

    });
    socket.on ('createEmail', (newEmail)=> {
        console.log('createEmail',newEmail)
    })


    socket.on('disconnect', function ()  {
        console.log('User was disconnected');
    
    })
} )
server.listen(port, function () {
    console.log(`Server is up ${port}`);

});
