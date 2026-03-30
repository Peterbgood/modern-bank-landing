// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component

interface NavbarProps {
  brandName: string;
}

const Navbar: React.FC<NavbarProps> = ({ brandName }) => {
  return (
    <nav className="p-6 border-b border-slate-100 flex justify-between items-center bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <Link to="/" className="text-2xl font-bold text-indigo-600 hover:opacity-80">
        {brandName}
      </Link>
      
      <div className="hidden md:flex space-x-8 text-slate-600 font-medium">
        {/* These 'to' paths must match your Routes in App.tsx */}
        <Link to="/" className="hover:text-indigo-600 transition-colors">Home</Link>
        <Link to="/solutions" className="hover:text-indigo-600 transition-colors">Solutions</Link>
        <Link to="/rates" className="hover:text-indigo-600 transition-colors">Rates</Link>
        <Link to="/contact" className="hover:text-indigo-600 transition-colors">Contact</Link>
      </div>

      <button className="bg-indigo-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100">
        Get Started
      </button>
    </nav>
  );
};

export default Navbar;