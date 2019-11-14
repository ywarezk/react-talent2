import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/hello/HelloFunction';
import HelloClass from './components/hello/HelloClass';
import TodoClass from './components/todo/TodoClass';

// React.createElement(Hello)

function App() {
  return (
    <div className="App">
      <Hello msg={'hello from parent'} />

      <HelloClass msg="hello2 from parent" />

      <TodoClass />
    </div>
  );
}

export default App;
