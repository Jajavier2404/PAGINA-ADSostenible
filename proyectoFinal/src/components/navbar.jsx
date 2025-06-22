import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Leaf } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();



  const handleClickOnu = () => {
    navigate('/onu');
  };

  const handleClickRestric = () => {
    navigate('/restric');
  };

  const handleClickObjetivosHc = () => {
    navigate('/objetHc');
  };

  const handleClickHuellaCarbono = () => {
    navigate('/hc');
  };

  const navigationItems = [
    { name: 'Onu', path: '/onu', handler: handleClickOnu },
    { name: 'Restric', path: '/restric', handler: handleClickRestric },
    { name: 'ObjetivosHc', path: '/objetHc', handler: handleClickObjetivosHc },
    { name: 'Huella Carbono', path: '/hc', handler: handleClickHuellaCarbono }
  ];

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-gradient-to-r from-green-50 to-emerald-50 shadow-md border-b border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={handleClickOnu}
              className="flex items-center space-x-2 text-green-700 hover:text-green-800 transition-colors"
            >
              <Leaf className="h-8 w-8" />
              <span className="font-bold text-xl">Proyecto Final</span>
            </button>
          </div>

          {/* Navigation Buttons - Siempre visibles */}
          <div className="flex items-center space-x-6">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={item.handler}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActivePath(item.path)
                    ? 'bg-green-200 text-green-800 shadow-sm'
                    : 'text-green-700 hover:bg-green-100 hover:text-green-800'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;