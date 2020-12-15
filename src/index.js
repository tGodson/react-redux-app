import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import App from './components/App';

const initialState = {
  books: [
    {
      id: Math.floor(Math.random() * 10000),
      title: 'Things Fall Apart',
      category: 'Biography',
    },
    {
      id: Math.floor(Math.random() * 10000),
      title: 'Alchemist',
      category: 'Fiction',
    },
    {
      id: Math.floor(Math.random() * 10000),
      title: 'Steve jobs',
      category: 'Biography',
    },
  ],
  filter: 'All',
};

const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
