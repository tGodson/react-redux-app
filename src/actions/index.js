export const CREATE_BOOK = 'CREATE_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';
export const CHANGE_FILTER = 'CHANGE_FILTER';

export const createBook = book => ({
  type: CREATE_BOOK,
  id: book.id,
  title: book.title,
  category: book.category,
});

export const removeBook = book => ({
  type: REMOVE_BOOK,
  id: book.id,
});

export const filterBook = category => ({
  type: CHANGE_FILTER,
  payload: category,
});
