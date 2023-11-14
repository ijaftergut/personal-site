import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Links from './Links';
import Home from './Home';
function App() {
  
  return (
    <div className="app">
      <nav className='all'>
            <Link to='/home'>Home</Link>
            <Link to='/links'>Links</Link>
            </nav>
            <main className='all'>
            <Routes>
              <Route path='*' element={
                <Home
              />}/>
              <Route path='/links' element={
                <Links
              />}/>
            </Routes>

            </main>
     
   
  </div>
  );
}

export default App;
