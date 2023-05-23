// import ReactDom from 'react-dom';
// import App from './components/App';

// ReactDom.render(<App />, document.querySelector('#root'));

//========================================
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
