const express = require('express');
const app = express();
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

app.use(cors());

let db,
  dbConnectionString = process.env.DB_STRING,
  dbName = 'sample_mflix',
  collection;

MongoClient.connect(dbConnectionString).then((client) => {
  console.log('Connected to Database');
  db = client.db(dbName);
  colletion = db.collection('movies');
});

app.listen(process.env.PORT || 8000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});