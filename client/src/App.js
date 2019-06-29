import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import BookList from './components/BookList';
import AddBook from './components/AddBook';
import AddAuthor from './components/AddAuthor';

const client = new ApolloClient({
  uri: 'http://localhost:3333/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div id='main'>
        <h1>Lenas Book Club</h1>
        <BookList />
        <div className='forms'>
          <AddBook />
          <AddAuthor />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
