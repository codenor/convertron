import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from '../components/sidebar.tsx';

const Menu1: React.FC = () => <div>Menu 1 content</div>;
const Menu2: React.FC = () => <div>Menu 2 content</div>;
const Menu3: React.FC = () => <div>Menu 3 content</div>;

const App: React.FC = () => {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path='/menu1' element={<Menu1 />} />
        <Route path='/menu2' element={<Menu2 />} />
        <Route path='/menu3' element={<Menu3 />} />
      </Routes>
    </Router>
  );
};

export default App;
