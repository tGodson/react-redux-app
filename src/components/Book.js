import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, removeBook }) => (
  <tr className="book-wrapper">
    <div className="book-info">
      <td className="book-title">{book.title}</td>
      <td className="book-category">{book.category}</td>
      <td className="options">
        <button type="button" className="buttons border-right">
          Comments
        </button>
        <button type="button" onClick={() => removeBook(book)} className="buttons border-right">
          Remove
        </button>
      </td>
    </div>

    <div className="book-progress">
      <div className="circle" />
      <div className="status-info">
        <span>80%</span>
        <span>Completed</span>
      </div>
    </div>
    <div className="book-update">
      <div className="chap">current chapter</div>
      <div className="num"> Chapter 15</div>
      <button type="button" className="update-button">Update Progress</button>
    </div>
  </tr>
);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;