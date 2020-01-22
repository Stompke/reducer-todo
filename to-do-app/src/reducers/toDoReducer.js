import React, { useReducer } from 'react';

//initial state
export const initialState = [
  {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  } 

]

export const toDoReducer = (state, action) => {

    
    switch( action.type ) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    item: action.payload,
                    completed: false,
                    id: Date.now()
                }

            ];
        case 'TOGGLE_COMPLETED':
            return (state.map(item => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        completed: !item.completed
                    }
                } else {
                    return item
                }
            })
                );
        case 'CLEAR_COMPLETED':
            return (state.filter(item => item.completed === false))
        default:
            return state;
    }


    return state;
}