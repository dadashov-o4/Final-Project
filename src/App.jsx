import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './containers/Home';
import Profile from './containers/Profile';
import Favourites from './containers/Favourites';
import Friends from './containers/Friends';
import Help from './containers/Help';

function App() {
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <BrowserRouter>
        <Navbar />
        <div style={{ display: 'flex', flex: 1 }}>
          <Sidebar />
          <main style={{ flex: 1, overflow: 'auto', padding: '20px', backgroundColor: '#f5f5f5' }}>
            {/* Styles for customized scrollbars */}
            <style>
              {`
                main::-webkit-scrollbar {
                  width: 8px;
                }

                main::-webkit-scrollbar-thumb {
                  background: #ff6104;
                  border-radius: 10px;
                }

                main::-webkit-scrollbar-track {
                  background: #f5f5f5;
                  border-radius: 10px;
                }

                /* Firefox */
                main {
                  scrollbar-width: thin;
                  scrollbar-color: #ff6104 #f5f5f5;
                }
              `}
            </style>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/favourites' element={<Favourites />} />
              <Route path='/friends' element={<Friends />} />
              <Route path='/help' element={<Help />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
