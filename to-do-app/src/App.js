import React, { useReducer } from 'react';
import logo from './logo.svg';
import './App.css';

//components
import ToDoList from './components/ToDoList';
import Form from './components/Form';
import Stuff from './components/Stuff';

import { toDoReducer, initialState } from './reducers/toDoReducer';

function App() {

  const [state, dispatch] = useReducer(toDoReducer, initialState); 


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <ToDoList dispatch={dispatch} state={state}/>
        <Form dispatch={dispatch} />
        {/* <Stuff /> */}
      </header>
    </div>
  );
}

export default App;
