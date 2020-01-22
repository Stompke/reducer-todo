import React, { useState } from 'react';

const ToDo = (props) => {

    // const [isChecked, setIsChecked] = useState(props.completed);

    // const clickHandler = () => {
    //     setIsChecked(!isChecked);
    // }



    return (
        <div onClick={() => props.dispatch({type: 'TOGGLE_COMPLETED', payload: props.id})}>
             
            {props.completed ? 
            <input checked type='checkbox' /> 
            : <input type='checkbox' />}
            {props.task}
        </div>
    )
}
export default ToDo;