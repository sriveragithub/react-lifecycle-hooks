import React from 'react';
import './style.css';
import LifecycleComponent from './components/LifecycleComponent';
import FunctionalLifecycleComponent from './components/FunctionalLifecycleComponent';

export default function App() {
  return (
    <div className="App">
      <h1>Hello StackBlitz!</h1>
      <LifecycleComponent />
      <FunctionalLifecycleComponent />
    </div>
  );
}
