import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SiConvertio } from 'react-icons/si';
import { FaDownload } from 'react-icons/fa';
import { GrStatusPlaceholderSmall } from 'react-icons/gr';

type Menu = {
  id: string;
  name: string;
  icon: JSX.Element;
};

const menus: Menu[] = [
  { id: 'menu1', name: 'Convert', icon: <SiConvertio /> },
  { id: 'menu2', name: 'Download', icon: <FaDownload /> },
  { id: 'menu3', name: 'menu-placeholder', icon: <GrStatusPlaceholderSmall /> },
];

const Sidebar: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      window.location.href = '/' + menus[0].name;
    }
  }, [location]);

  return (
    <div className='h-[calc(100vh-3rem)] w-[calc(100% - 3rem)] max-w-xs bg-gray-900 text-white overflow-y-auto rounded-lg m-5'>
      <header className='px-6 py-4 border-b border-gray-600'>
        <h1 className='text-2xl font-semibold text-white'>Convertron</h1>
      </header>
      <nav className='px-6 py-4 space-y-1'>
        {menus.map((menu) => (
          <Link
            key={menu.id}
            to={menu.name}
            className={`flex items-center px-3 py-3 text-x font-large rounded-md ${
              location.pathname === '/' + menu.name
                ? 'bg-gray-600 text-white'
                : 'text-white hover:bg-gray-800'
            }`}>
            {menu.icon}
            <span className='ml-4'>{menu.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
