import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Import your new Footer
import Home from './pages/Home';
import Rates from './pages/Rates';
import Solutions from './pages/Solutions';
import Contact from './pages/Contact';

function App() {
  return (
    // The flex-col and min-h-screen trick ensures the footer 
    // stays at the bottom even on short pages.
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rates" element={<Rates />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;