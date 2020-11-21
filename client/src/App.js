import React from 'react';
import './App.css';
import TaskManager from './Component/TaskManager';
import GoogleAuth from './Component/GoogleAuth';
function App() {
  return (
    <div className="App">
      <GoogleAuth />
      <TaskManager />
    </div>
  );
}

export default App;
