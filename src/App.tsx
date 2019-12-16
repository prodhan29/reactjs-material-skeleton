import React from 'react';
import MiniDrawer from './containers/layout/sidebar/Sidebar';
import './App.css';
import Home from './containers/pages/home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateTodo from './components/page/home/CreateTodo';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <MiniDrawer>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/create-todo' exact component={CreateTodo} />
          </Switch>
        </MiniDrawer>
      </div>
    </Router>
  );
}

export default App;
