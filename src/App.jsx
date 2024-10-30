import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import UserList from './pages/UserList';
import Dashboard from './pages/dashboard';  // Ruta protegida
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
          
        />
        <Route path='/UserList' 
        element={
          <ProtectedRoute>
            <UserList/>
          </ProtectedRoute>
        }/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
