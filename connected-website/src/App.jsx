import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Connected from './components/Connected';
import Impact from './components/Impact';
import About from './components/About';
import NavBar from './components/Nav';

function App() {
  return (
    <>
      <div className="w-100 h-100" style={{ position: 'fixed', top: '0px', left: '0px' }}>
        <NavBar />
      </div>
      <div className="App h-100 d-flex flex-column">
        <Connected />
        <About />
        <Impact />
      </div>


    </>
  );
}

export default App;
