import logo from './logo.svg';
import './App.css';

import {BrowserRouter, BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from 'react';
import Nav from './components/Landing';
import Manufacturer from './components/Manufacturer';
import ManufacturerSign from "./components/Signup/ManufacturerSign";
import Farmer from "./components/Farmer";
import FarmerSign from "./components/Signup/FarmerSign";
import ConsumerSign from './components/Signup/ConsumerSign';
import Consumer from './components/Consumer';
import News from './components/News';
import Warehouse from "./components/Warehouse";
import WarehouseSign from "./components/Signup/WarehouseSign";
import Landing from '../src/components/starting/Landing';
import Footer from './components/Footer';
// import Layout from './components/Layout';


function App() {
  return (
    <BrowserRouter>
    <div>
    <Nav></Nav>
    <Routes>
     {/* <Route path="/" element={<Landing/>}></Route> */}
     <Route path="/farmer" element={<Farmer/>}></Route>
     <Route path="/SignupFarmer" element={<FarmerSign/>}></Route>
     <Route path="/manufacturer" element={<Manufacturer/>}></Route>
     <Route path="/SignupManufacturer" element={<ManufacturerSign/>}></Route>
     <Route path="/warehouse" element={<Warehouse/>}></Route>
     <Route path="/SignupWarehouse" element={<WarehouseSign/>}></Route>
     <Route path="/consumer" element={<Consumer/>}></Route>
     <Route path="/SignupConsumer" element={<ConsumerSign/>}></Route>
    
     <Route path="/News" element={<News/>}></Route>
   
  </Routes> 
    <Footer></Footer>
    
      
    </div>
    </BrowserRouter>
  );
}

export default App;
