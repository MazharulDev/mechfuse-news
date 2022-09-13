import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ForgotPassword from './components/Login/ForgotPassword';
import SignUp from './components/Login/SignUp';
import RequireAuth from './components/shared/RequireAuth';
import Login from './components/Login/Login'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        } />
        <Route path='/signup' element={<SignUp />} />
        <Route path='forgotpassword' element={<ForgotPassword />} />
        <Route path='/login' element={<Login />} />

      </Routes>
    </div>
  );
}

export default App;
