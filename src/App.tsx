import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login'
import Register from './components/Register';
import UserList from './components/UserList';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Register  />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/userlist" element={<UserList/>} />

      </Routes>
    </div>
  );
}
export default App;