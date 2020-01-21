import React, { useReducer } from 'react';

//components
import ToDo from './ToDo';

//Reducers
import { toDoReducer, initialState } from '../reducers/toDoReducer';

const ToDoList = () => {

    const [state, dispatch] = useReducer(toDoReducer, initialState);

    return (
        <div>
            {/* {state.map(item => <Todo />)} */}
            <ToDo key={state.id} item={state.item} />
        </div>
    )
} 
export default ToDoList;