import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ForgotPassword from './components/Login/ForgotPassword';
import SignUp from './components/Login/SignUp';
import News from './components/News/News';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='forgotpassword'element={<ForgotPassword/>}/>
        <Route path='/news' element={<News/>}/>
      </Routes>
    </div>
  );
}

export default App;
