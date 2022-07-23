import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './components/Card.js';
import App from './containers/App'; 
import CardList from './components/CardList';
// import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons'; 


ReactDOM.render(<App/>, document.getElementById('root'));
// registerServiceWorker();
  