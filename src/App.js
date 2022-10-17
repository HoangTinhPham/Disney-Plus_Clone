import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Navigate,} from "react-router-dom";
import './App.css';
import Detail from './components/Detail';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';

function App() {

  const username = useSelector((state => state.user.name))

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={username ? <Home /> : <Navigate replace to="/" />} />
          <Route path="/detail/:movieId" element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
