import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import HotelsList from './pages/HotelsList/HotelsList';
import Hotel from './pages/Hotel/Hotel';
import Login from './pages/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hotels' element={<HotelsList />} />
        <Route path='/hotels/:id' element={<Hotel />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
