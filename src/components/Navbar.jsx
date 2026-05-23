import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900/60 backdrop-blur-xl border-b border-white/10 transition-all duration-300 shadow-lg shadow-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-purple-500 hover:opacity-80 transition-opacity">
              Camilo Serrano
            </Link>
          </div>
          <div className="flex space-x-1 sm:space-x-4">
            <Link 
              to="/" 
              className={`${location.pathname === '/' ? 'bg-white/10 text-white border border-white/20' : 'text-gray-300 hover:bg-white/5 hover:text-white'} px-3 py-2 rounded-md text-sm font-medium transition-colors`}
            >
              Sobre Mí
            </Link>
            <Link 
              to="/efectos" 
              className={`${location.pathname === '/efectos' ? 'bg-white/10 text-white border border-white/20' : 'text-gray-300 hover:bg-white/5 hover:text-white'} px-3 py-2 rounded-md text-sm font-medium transition-colors`}
            >
              Laboratorio
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
