import React from 'react';
import SprintBoard from './pages/Main/SprintBoard';
import logo from './logo.svg';
import './pages/Main/SprintBoard.module.scss';
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Welcome to the Sprint board!</h1>
      <p>This is the content of the sprint board component.</p>

      <main>
        <SprintBoard />
      </main>
    </div>
  );
}

export default App;