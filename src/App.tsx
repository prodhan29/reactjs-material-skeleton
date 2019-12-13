import React from 'react';
import logo from './logo.svg';
import MiniDrawer from'./containers/layout/sidebar/Sidebar';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <MiniDrawer></MiniDrawer>
    </div>
  );
}

export default App;
