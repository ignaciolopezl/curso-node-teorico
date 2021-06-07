const db = require('mongoose');
//const uri ='mongodb://db_ignacio:123Pormi1.@cluster0-shard-00-00.ibf2g.mongodb.net:27017,cluster0-shard-00-01.ibf2g.mongodb.net:27017,cluster0-shard-00-02.ibf2g.mongodb.net:27017/telegrom?ssl=true&replicaSet=atlas-hasqmx-shard-0&authSource=admin&retryWrites=true&w=majority';
db.Promise = global.Promise;

async function connect(uri){
   await db.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true,dbName: 'telegrom' })
    .then(() => console.log('[db] Conectada con éxito'))
    .catch(err => console.error('[db]', err));
}

module.exports = connect;