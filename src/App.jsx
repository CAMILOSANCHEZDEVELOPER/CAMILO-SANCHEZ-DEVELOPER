import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import EffectsLab from './pages/EffectsLab';
import Background3D from './components/Background3D';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen text-white">
        {/* Background Aurora Effects (Global) */}
        <div className="fixed inset-0 z-[-1] bg-black">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-900/30 via-black to-purple-900/30"></div>
          <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] opacity-40 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
          <div className="aurora aurora-1"></div>
          <div className="aurora aurora-2"></div>
          <div className="aurora aurora-3"></div>
        </div>

        <Background3D />

        <Navbar />
        
        <div className="pt-24 sm:pt-28 pb-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/index.html" element={<Home />} />
            <Route path="/efectos" element={<EffectsLab />} />
            <Route path="/home" element={<Home />} />
            <Route path="/labs" element={<EffectsLab />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
