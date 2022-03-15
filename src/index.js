import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './routes'; 

ReactDOM.render(
  <Router>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <a className="navbar-brand" href="/">Team Budget Planner</a>
      <div class="container-fluid">
          <div className="navbar-nav">
              <a className="nav-link active" href="/">Product Manager View</a>
              <a className="nav-link" href="/finance">Finance View</a>
          </div>   
      </div>
    </nav>
    <Routes />
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
