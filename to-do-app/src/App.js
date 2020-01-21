import React from 'react';
import logo from './logo.svg';
import './App.css';

//components
import ToDoList from './components/ToDoList';
import Form from './components/Form';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <ToDoList />
        <Form />
      </header>
    </div>
  );
}

export default App;
