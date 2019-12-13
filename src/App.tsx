import React from 'react';
import logo from './logo.svg';
import MiniDrawer from'./containers/layout/sidebar/Sidebar';
import './App.css';
import UserTable from './components/page/home/UserTable';

const App: React.FC = () => {
  return (
    <div className="App">
      <MiniDrawer>
        <UserTable/>
      </MiniDrawer>
    </div>
  );
}

export default App;
