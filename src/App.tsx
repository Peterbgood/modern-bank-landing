import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Rates from './pages/Rates';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar brandName="HorizonPay" />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/rates" element={<Rates />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;