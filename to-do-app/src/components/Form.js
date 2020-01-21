import React, { useState, useReducer } from 'react';


//Reducers
import { toDoReducer, initialState } from '../reducers/toDoReducer';

const Form = () => {

    const [taskName, setTaskName ] = useState('');

    const [state, dispatch] = useReducer(toDoReducer, initialState);


    const onChange = e => {
        setTaskName(e.target.value);
    }

    return (
        <div>
            <h1>Form</h1>

            <input
                value={taskName}
                type='text'
                onChange={onChange}
            />
            <button onClick={() => dispatch({type: 'ADD_TODO', payload: taskName}) }>Add New TODO</button>
        </div>


    )
}
export default Form;