import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import Menu from './config/Menu';
import Routes from './config/Routes';
import './App.css';

export default function App() {
  return (
    <Router>
      <div>
        <Menu/>
        <hr />
        <Routes/>
      </div>
    </Router>
  );
}
