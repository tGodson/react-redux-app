import React from 'react';
import '../index.css';
import BookList from '../containers/BookList';
import BookForm from '../containers/BookForm';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <BookList />
      <BookForm />
    </div>
  );
}

export default App;
