import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: Brand */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white tracking-tight">HorizonPay</h3>
          <p className="text-sm">Modern banking solutions for the digital age. Secure, fast, and built for you.</p>
        </div>

        {/* Column 2: Products */}
        <div>
          <h4 className="text-white font-semibold mb-4">Products</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/rates" className="hover:text-blue-400">Savings Accounts</Link></li>
            <li><Link to="/rates" className="hover:text-blue-400">Credit Cards</Link></li>
            <li><Link to="/solutions" className="hover:text-blue-400">Personal Loans</Link></li>
          </ul>
        </div>

        {/* Column 3: Company */}
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/contact" className="hover:text-blue-400">Contact Us</Link></li>
            <li><Link to="/" className="hover:text-blue-400">Privacy Policy</Link></li>
            <li><Link to="/" className="hover:text-blue-400">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact info */}
        <div>
          <h4 className="text-white font-semibold mb-4">Support</h4>
          <p className="text-sm">support@horizonpay.com</p>
          <p className="text-sm">1-800-HORIZON</p>
        </div>
      </div>
      
      <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
        © 2026 HorizonPay. Member FDIC. Equal Housing Lender.
      </div>
    </footer>
  );
};

export default Footer;