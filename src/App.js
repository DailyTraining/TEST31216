import logo from './logo.svg';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Authentication from './pages/Authentication';
import DashBoard from './pages/DashBoard';

function App() {
  // const isAuthenticated = useSelector(state => state.authenticationReducer.isAuthenticated);
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  return (
    <Routes>
      {isAuthenticated !== null && isAuthenticated ? (
        <>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="authentication" element={<Navigate to="/dashboard" />} />
          <Route path="dashboard" element={<DashBoard />} />
        </>
      ) : (
        <Route path="/*" element={<Authentication />} />
      )}
    </Routes>
  );
}

export default App;