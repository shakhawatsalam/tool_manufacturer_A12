import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Purchase from './Pages/Purchase/Purchase';
import Login from './Shared/Login';
import Register from './Shared/Register';
import RequireAuth from './Shared/RequireAuth';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="purchase/:id" element={
          <RequireAuth>

            <Purchase />
          </RequireAuth>
        }></Route>

      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
