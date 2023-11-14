import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Links from './Links';
import Colors from './Colors';
import Home from './Home';
function App() {
  
  return (
    <div className="app">
      <nav className='all'>
            <Link to='/home'>HOME</Link>
            <Link to='/colors'>COLORS</Link>
            <Link to='/links'>LINKS</Link>

            </nav>
            <main className='all'>
            <Routes>
              <Route path='colors' element={
                <Colors
              />}/>
              <Route path='/links' element={
                <Links
              />}/>
              <Route path='/*' element={
                <Home
              />}/>
            </Routes>

            </main>
     
   
  </div>
  );
}

export default App;
