const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());

mongoose.connect(
  'mongodb+srv://Elvis:txtTmPXPR2ywBLY@cluster0-5dffu.mongodb.net/test?retryWrites=true&w=majority'
);
mongoose.connection.once('open', () => {
  console.log('connected to database');
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(3333, () => {
  console.log('now listening for requests on port 3333');
});