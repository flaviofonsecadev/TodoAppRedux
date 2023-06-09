import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import App from './src/App';

const TodoApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default TodoApp;
