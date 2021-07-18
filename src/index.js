import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

import App from './App';

// context
import { AppProvider } from './context/AppContext';
import { TodoProvider } from './context/TodoContext';

ReactDOM.render(
  <BrowserRouter>
    <AppProvider>
      <TodoProvider>
        <App />
      </TodoProvider>
    </AppProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
