

import './app.css'

import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import CheckOut from './pages/checkout/CheckOut';
import Login from './pages/login/Login'
import SignUp from './pages/signUp/SignUp'
import NavBar from './components/navbar/NavBar';
import ItemDetails from './pages/itemDetails/ItemDetails';

function App() {

  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/signup' element={<SignUp />} />
         <Route path='/login' element={<Login />} />
         <Route path='/productDetails/:category/:id/:title' element={<ItemDetails />} />
        <Route path='/checkout' element={<CheckOut />} />
      </Routes>

    </div>
  );
}

export default App;

