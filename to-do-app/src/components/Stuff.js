import React, { useReducer } from 'react';

import { toDoReducer, initialState } from '../reducers/toDoReducer';

const Stuff = () => {

    const [state, dispatch] = useReducer(toDoReducer, initialState);


    return (
        <h3>{state[0].item}</h3>
    )
}

export default Stuff;