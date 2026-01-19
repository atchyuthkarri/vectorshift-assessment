import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import 'reactflow/dist/style.css';

import './styles/variables.css';
import './styles/animations.css';
import './styles/BaseNode.css';
import './styles/handles.css';
import './styles/edges.css';
import './styles/reactflow-ui.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
