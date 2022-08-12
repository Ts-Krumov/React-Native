import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppClass from './TodoApp';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppClass/>
  </React.StrictMode>
);

