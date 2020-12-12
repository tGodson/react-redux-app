import React from 'react';

const BookForm = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <form>
      <label htmlFor="title">
        Title
        <input id="title" type="text" name="title" />
      </label>
      <select id="category">
        {categories.map(e => <option key={e} value={e}>{e}</option>)}
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BookForm;