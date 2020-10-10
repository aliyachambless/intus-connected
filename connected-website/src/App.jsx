import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Connected from './components/Connected';
import Impact from './components/Impact';
import About from './components/About';
import Involved from './components/Involved';

function App() {
  return (
    <div className="App h-100 d-flex flex-column">
      <Connected />
      <About />
      <Impact />
      <Involved />
    </div>
  );
}

export default App;
