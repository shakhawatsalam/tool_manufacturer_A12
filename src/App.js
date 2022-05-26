import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Purchase from './Pages/Purchase/Purchase';
import Login from './Shared/Login';
import Register from './Shared/Register';
import RequireAuth from './Shared/RequireAuth';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Dashboard/Dashboard';
import MyProfile from './Dashboard/MyProfile';
import AddaReview from './Dashboard/AddaReview';
import MyOrder from './Dashboard/MyOrder';
import AllUsers from './Dashboard/AllUsers';
import RequireAdmin from './Shared/RequireAdmin';
import Payment from './Dashboard/Payment';
import AddProduct from './Dashboard/AddProduct';
import ManageAllOrder from './Dashboard/ManageAllOrder';
import ManageProduct from './Dashboard/ManageProduct';
import PageNotFound from './Shared/PageNotFound';
import Blog from './Pages/Home/Blog';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/blogs" element={<Blog />}></Route>
        <Route path="/purchase/:id" element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        }></Route>
        {/* nested routs  */}
        <Route path="dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='addreview' element={<AddaReview></AddaReview>}></Route>
          <Route path='myorder/:email' element={<MyOrder></MyOrder>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='users' element={<RequireAdmin><AllUsers></AllUsers></RequireAdmin>}></Route>
          <Route path='addProduct' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
          <Route path='manageorder' element={<RequireAdmin><ManageAllOrder></ManageAllOrder></RequireAdmin>}></Route>
          <Route path='manageproduct' element={<RequireAdmin><ManageProduct></ManageProduct></RequireAdmin>}></Route>
        </Route>

        <Route path="/*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
