import React from 'react';
import ReactDOM from 'react-dom/client';
import 'antd/dist/reset.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// Smooth scrolling for in-page anchor navigation.
const style = document.createElement('style');
style.textContent = 'html { scroll-behavior: smooth; }';
document.head.appendChild(style);
