import React from 'react';
// import ReactDOM from 'react-dom';
// import { render } from 'react-snapshot';
import { hydrate, render } from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-modal-video/scss/modal-video.scss';
import * as serviceWorker from './serviceWorker';

// import 'reactjs-popup/dist/index.css';


// ReactDOM.hydrate(

//   <App />, document.getElementById('root')

// );


// render(
//     <App/>,
//     document.getElementById('root')
//   );
const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} 
else {
  render(<App />, rootElement);
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
