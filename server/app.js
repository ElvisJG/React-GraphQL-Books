const express = require('express');
const graphqlHTTP = require('express-graphql');
const scheme = require('./schema/schema');

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema
  })
);

app.listen(3333, () => {
  console.log('now listening for requests on port 3333');
});
