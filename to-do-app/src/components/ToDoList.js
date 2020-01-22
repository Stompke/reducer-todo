import React, { useReducer } from 'react';

//components
import ToDo from './ToDo';

//Reducers
// import { toDoReducer, initialState } from '../reducers/toDoReducer';

const ToDoList = props => {

    // const [state, dispatch] = useReducer(toDoReducer, initialState);

    console.log(props.state)

    return (
        <div>
            {props.state.map(todo => <ToDo dispatch={props.dispatch} key={todo.id} id={todo.id} completed={todo.completed} task={todo.item} />)}
        
        </div>
    )
} 
export default ToDoList;