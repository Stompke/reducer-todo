import React, { useState, useReducer } from 'react';


//Reducers
// import { toDoReducer, initialState } from '../reducers/toDoReducer';

const Form = props => {
    const [taskName, setTaskName ] = useState('');
    // const [state, dispatch] = useReducer(toDoReducer, initialState);

    const onChange = e => {
        setTaskName(e.target.value);
    }

    return (
        <div>
            <input
                value={taskName}
                type='text'
                onChange={onChange}
            />
            <button onClick={() => props.dispatch({type: 'ADD_TODO', payload: taskName}) }>Add New TODO</button>
            <div>
                <button onClick={() => props.dispatch({type: 'CLEAR_COMPLETED'})}>Clear Completed</button>
            </div>
        </div>
    )
}
export default Form;