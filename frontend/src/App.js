import './App.css';
import "react-toastify/dist/ReactToastify.css"

import{BrowserRouter, Routes, Route} from 'react-router-dom';
import {ToastContainer} from "react-toastify";

import Cart from './Components/Cart';
import Home from './Components/Home';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ToastContainer/>
      <Navbar />
      <Routes>
        <Route path='/cart' Component={Cart} />
        <Route path='/' Component={Home} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
