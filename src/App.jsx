import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './containers/Home';
import Profile from './containers/Profile';
import Favourites from './containers/Favourites';
import Wallet from './containers/Wallet';
import Friends from './containers/Friends';
import Rapor from './containers/Rapor';
import Help from './containers/Help';

function App() {
  return ( 
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <Routes style={{ flex: 1 }}>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={< Profile />} />
            <Route path='/favourites' element={< Favourites />} />
            <Route path='/wallet' element={< Wallet />} />
            <Route path='/friends' element={< Friends />} />
            <Route path='/rapor' element={< Rapor />} />
            <Route path='/help' element={< Help />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
