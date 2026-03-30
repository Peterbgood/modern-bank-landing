import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <section className="pt-20 pb-32 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-blue-600 uppercase bg-blue-100 rounded-full">
            Banking Reimagined
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight">
            The Future of <br />
            <span className="text-blue-600">Digital Finance</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 mb-10 leading-relaxed">
            Manage your wealth with precision. Experience a banking platform built 
            with cutting-edge security and seamless user experience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/25">
              Get Started Now
            </Link>
            <Link to="/rates" className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold hover:bg-slate-50 transition-all">
              View Rates
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Feature Grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose HorizonPay?</h2>
            <p className="text-slate-600">Built for the modern economy with features you actually use.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Instant Transfers", desc: "Send money globally in seconds with zero hidden fees.", icon: "⚡" },
              { title: "Smart Budgeting", desc: "AI-powered insights to help you save more every month.", icon: "📊" },
              { title: "Elite Security", desc: "Biometric encryption and 24/7 fraud monitoring.", icon: "🛡️" },
              { title: "High-Yield Savings", desc: "Industry-leading interest rates that grow your wealth.", icon: "💰" },
              { title: "Mobile First", desc: "Manage everything from our award-winning mobile app.", icon: "📱" },
              { title: "24/7 Support", desc: "Real humans ready to help you whenever you need it.", icon: "🤝" },
            ].map((feature, i) => (
              <div key={i} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-blue-200 transition-colors group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Testimonials Section */}
      <section className="py-24 px-6 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Trusted by Thousands</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: "Sarah Jenkins", role: "Small Business Owner", text: "HorizonPay transformed how I manage my business expenses. The interface is intuitive and the support is unmatched." },
              { name: "Michael Chen", role: "Software Engineer", text: "As a developer, I appreciate the tech-first approach. The security features give me peace of mind with my investments." }
            ].map((t, i) => (
              <div key={i} className="p-10 bg-slate-800 rounded-3xl border border-slate-700 relative">
                <div className="text-blue-400 text-6xl absolute top-6 right-8 opacity-20">"</div>
                <p className="text-lg italic text-slate-300 mb-6 leading-relaxed relative z-10">{t.text}</p>
                <div>
                  <p className="font-bold text-white">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Final CTA Section */}
      <section className="py-24 px-6 bg-white text-center">
        <div className="max-w-4xl mx-auto bg-blue-600 p-12 md:p-20 rounded-[3rem] shadow-2xl shadow-blue-500/40 relative overflow-hidden">
          {/* Decorative Circle Background */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500 rounded-full opacity-50"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to switch to the <br /> modern way of banking?</h2>
            <p className="text-blue-100 mb-10 text-lg">Join over 50,000+ members growing their wealth with HorizonPay.</p>
            <Link to="/contact" className="px-10 py-5 bg-white text-blue-600 rounded-2xl font-black text-lg hover:bg-slate-50 transition-all shadow-xl">
              Open Your Account Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;