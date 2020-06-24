import React from 'react';
import Home from "./pages/Home/Home";
import data from './data.json';
import Login from './pages/Login/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Home data={data}/> */}
      <Login />
    </div>
  );
}

export default App;
