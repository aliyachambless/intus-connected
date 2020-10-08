import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Connected from './components/Connected';
import Impact from './components/Impact';

function App() {
  return (
    <div className="App w-100 h-100 d-flex flex-column">
      <Connected />
      <Impact />

    </div>
  );
}

export default App;
