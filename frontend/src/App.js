import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Signup from './Components/Signup';
import Navbar from './Components/navbar';
import Update from './Components/UpdateUser';
import AllUser from './Components/AllUsers';
function App() {
  return (
    <div className='App'>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Signup /> } />
        <Route path='/update/:id' element={<Update />} />
        <Route path='/all' element={<AllUser />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
