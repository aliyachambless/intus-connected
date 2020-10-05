import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App w-100 h-100 d-flex flex-column">
      <Switch>
        <Route exact path="/404" component={NotFound} />
        <Route exact path="/" component={Home} />
        <Route exact path="/Art" component={Art} />
        <Route component={RedirectToNotFound} />
      </Switch>
    </div>
  );
}

export default App;
