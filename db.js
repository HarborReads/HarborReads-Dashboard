const { MongoClient } = require('mongodb');

let dbConnection;
let uri = 'mongodb+srv://HarborReads:MongoDB%40HR12@cluster0.nhckanx.mongodb.net/harborreads?retryWrites=true&w=majority';

module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect(uri)
          .then((client) => {
            dbConnection = client.db();
            // Pass the dbConnection to the callback
            return cb(null, dbConnection);
          })
          .catch(err => {
            console.log(err);
            return cb(err);
          });
    },
    getDb: () => dbConnection
};
