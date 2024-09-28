import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import './styles/App.css';
<script src="https://kit.fontawesome.com/your-fontawesome-kit.js" crossorigin="anonymous"></script>

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);