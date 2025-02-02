import { Routes, Route, Navigate } from 'react-router-dom';

import LoginForm from './components/LoginForm';
import Home from './components/Home';
import Jobs from './components/Jobs';
import JobItemDetails from './components/JobItemDetails';
import NotFound from './components/NotFound';
import ProtectedRoute from './components/ProtectedRoute';

import './App.css';

const App = () => (
  <>
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      <Route path="/jobs" element={<ProtectedRoute><Jobs /></ProtectedRoute>} />
      <Route path="/jobs/:id" element={<ProtectedRoute><JobItemDetails /></ProtectedRoute>} />
      <Route path="/not-found" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  </>
);

export default App;
