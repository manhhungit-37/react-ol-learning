import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

import App from './App';

// context
import { AppProvider } from './context/AppContext';
import { TodoProvider } from './context/TodoContext';
import { AuthenticateProvider } from './context/AuthenticateContext';

ReactDOM.render(
  <Router>
    <AuthenticateProvider>
      <AppProvider>
        <TodoProvider>
          <App />
        </TodoProvider>
      </AppProvider>
    </AuthenticateProvider>
  </Router>,
  document.getElementById('root')
);
