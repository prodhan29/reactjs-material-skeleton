import React from 'react';
import logo from './logo.svg';
import MiniDrawer from'./containers/layout/sidebar/Sidebar';
import './App.css';
import Home from './containers/pages/home';

const App: React.FC = () => {
  return (
    <div className="App">
      <MiniDrawer>
        <Home/>
      </MiniDrawer>
    </div>
  );
}

export default App;
