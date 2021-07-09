import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';

// context
import { AppProvider } from './context/AppContext';
import { TodoProvider } from './context/TodoContext';

ReactDOM.render(
  <AppProvider>
    <TodoProvider>
      <App />
    </TodoProvider>
  </AppProvider>,
  document.getElementById('root')
);
