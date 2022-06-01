import logo from './logo.svg';
import { React, useState, useEffect } from 'react';
import './App.css';
import Navigation from './navigation/navigation.jsx';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import {Routes, Route, Navigate } from 'react-router-dom';



function App() {

  return (
    <div>
      <Login />
    </div>
  );
}

export default App;