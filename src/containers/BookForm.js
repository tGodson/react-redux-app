import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions/index';

const categories = [
  'Action',
  'Biography',
  'Fiction',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

class BookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: categories[0],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleChange(e) {
    const { name } = e.target;
    this.setState({
      [name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { createBook } = this.props;
    createBook(this.state);
    this.setState({
      title: '',
      category: categories[0],
    });
    e.target.reset();
  }

  render() {
    const { title, category } = this.state;
    return (
      <div className="form-wrapper">
        <h2>Add new Book</h2>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input
            id="title"
            type="text"
            name="title"
            value={title}
            onChange={event => this.handleChange(event)}
            placeholder="Book Title"
          />
          <select
            id="category"
            name="category"
            value={category}
            onChange={event => this.handleChange(event)}
          >
            {categories.map(e => (
              <option key={e} value={e}>
                {e}
              </option>
            ))}
          </select>
          <button type="submit">Add book</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  createBook,
};

BookForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};
export default connect(null, mapDispatchToProps)(BookForm);