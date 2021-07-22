import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

import App from './App';

// context
import { AppProvider } from './context/AppContext';
import { TodoProvider } from './context/TodoContext';

ReactDOM.render(
  <Router>
    <AppProvider>
      <TodoProvider>
        <App />
      </TodoProvider>
    </AppProvider>
  </Router>,
  document.getElementById('root')
);
