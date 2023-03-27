import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/layout/Layout';
import Login from './components/Login';
import Register from './components/Register';
import Questions from './components/Questions';
import Dashboard from './components/Dashboard';
import AuthProvider from './context/AuthContext';
import QuestionsProvider from './context/QuestionsContext';

function App() {
  return (
    <BrowserRouter>
     <AuthProvider>
      <QuestionsProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/questions" element={<Questions />} />
            {/* authenticated users */}
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

        </Routes>
        </QuestionsProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
