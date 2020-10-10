import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Connected from './components/Connected';
import Impact from './components/Impact';
import About from './components/About';

function App() {
  return (
    <div className="App h-100 d-flex flex-column">
      <Connected />
      <About />
      <Impact />
    </div>
  );
}

export default App;
