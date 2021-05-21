import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, filterBook } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

function BooksList({
  books, filter, removeBook, filterBook,
}) {
  const handleRemoveBook = book => {
    removeBook(book);
  };

  let booksfiltered = books;
  if (filter === 'All') {
    booksfiltered = books;
  } else {
    booksfiltered = books.filter(book => book.category === filter);
  }

  const handleFilterChange = e => {
    filterBook(e.target.value);
  };

  return (
    <div>
      <CategoryFilter handleFilterChange={handleFilterChange} />
      <table>
        {
          booksfiltered.map(book => (
            <Book book={book} removeBook={handleRemoveBook} key={book.id} />
          ))
        }
      </table>
    </div>
  );
}

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = {
  removeBook,
  filterBook,
};

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  removeBook: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  filterBook: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);