const config = {
    dbUrl: process.env.DB_URL || 'mongodb://db_ignacio:123Pormi1.@cluster0-shard-00-00.ibf2g.mongodb.net:27017,cluster0-shard-00-01.ibf2g.mongodb.net:27017,cluster0-shard-00-02.ibf2g.mongodb.net:27017/telegrom?ssl=true&replicaSet=atlas-hasqmx-shard-0&authSource=admin&retryWrites=true&w=majority',
    port: process.env.PORT ||  3000,
    host : process.env.HOST || 'http://localhost',
}
module.exports = config;