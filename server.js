const express = require("express");
const app = express();
const server = require('http').Server(app);
const db = require('./bd');
const socket = require('./socket');
const cors = require('cors');
const config = require('./config');
db(config.dbUrl);

const router = require('./network/routes');
app.use(cors());
app.use(express.json()); //alternativa a body-parser antes: bodyParser.json()
app.use(express.urlencoded({ extended: true }));
//app.use(router);
socket.connect(server);
router(app);



app.use('/app', express.static('public'));

server.listen(config.port, function(){
    console.log('la aplicacion esta escuchando en ' + config.host + ':' + config.port);
});

