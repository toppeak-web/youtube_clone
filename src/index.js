import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Youtube from './service/youtube.js';


const yt = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY)
ReactDOM.render(
  <React.StrictMode>
    <App yp={yt}/>
  </React.StrictMode>,
  document.getElementById('root')
);
