import FeatureCard from '../components/FeatureCard';

const Home = () => {
  const features = [
    { title: "Vault Security", desc: "Military-grade encryption for every penny.", icon: "🛡️" },
    { title: "Instant Transfers", desc: "Send money across Tennessee in seconds.", icon: "⚡" },
    { title: "High-Yield", desc: "Industry-leading rates on your savings.", icon: "📈" }
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-6xl font-black text-slate-900 mb-6">
          Banking Built for <span className="text-indigo-600">You.</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((item, index) => (
          <FeatureCard 
            key={index} 
            title={item.title} 
            description={item.desc} 
            icon={item.icon} 
          />
        ))}
      </div>
    </main>
  );
};

export default Home;