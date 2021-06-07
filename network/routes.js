const express = require('express');
const message = require('./../components/message/network');
const user = require('./../components/user/network');
const chat = require('./../components/chat/network');

const routes = function(server){
    server.use('/message',message);//esto hace que cada vez que use la ruta localhost/message llame al componente message/network
    server.use('/user',user);
    server.use('/chat',chat);
}

module.exports = routes;