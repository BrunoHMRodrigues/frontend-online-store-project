import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
// import Home from './components/Content';
import Search from './components/Search';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Search } />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
