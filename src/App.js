import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Links from './Links';
import Colors from './Colors';
import Home from './Home';
import EasterEgg from './EasterEgg';
import Breakout from './Breakout';
import React, { useState } from 'react';
function App() {
  const [easterEgg, setEasterEgg]=useState(false)
  return (
    <div className="app">
      <nav className='all'>
            <Link to='/home'>HOME</Link>
            <Link to='/colors'>COLORS</Link>
            <Link to='/links'>LINKS</Link>
            <Link to='/breakout'>BREAKOUT</Link>
            {easterEgg?<Link className='bounce' to='/easter-egg'>EASTER EGG</Link>:null}
            </nav>
            <main className='all'>
            <Routes>
              <Route path='colors' element={
                <Colors
                setEasterEgg={setEasterEgg}
              />}/>
              <Route path='/links' element={
                <Links
              />}/>
              <Route path='/breakout' element={
                <Breakout
              />}/>
              <Route path='/*' element={
                <Home
              />}/>
             {easterEgg? <Route path='/easter-egg' element={
                <EasterEgg
              />}/>:null}
            </Routes>
            </main>
  </div>
  );
}

export default App;
