import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/Header';
import Signup from './components/Signup';
import Counsellor from './components/Counsellor';
import Visitor from './components/Visitor';
import Appointment from './components/Appointment';
import Signin from './components/Signin';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contactpage from './components/Contactpage';
import About from './components/About';

function App() {
  return  <React.Fragment>
    <header>
      <Header/>
    </header>
    <main>
      <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/signup' element={<Signup/>} exact/>
        <Route path='/signin' element={<Signin/>} exact/>
        <Route path='/counsellor' element={<Counsellor/>} exact/>
        <Route path='/visitor' element={<Visitor/>} exact/>
        <Route path='/appointment' element={<Appointment/>} exact/>
        <Route path='/contactpage' element={<Contactpage/>} exact/>
        <Route path='/about' element={<About/>} exact/>

      </Routes>
    </main>

  </React.Fragment>
}

export default App;
