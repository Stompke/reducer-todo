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

    // if (action.type === 'ADD_TODO') {
    //     console.log('dispatch ADD_TODO')
    //     return [
    //         ...state,
    //         {
    //             item: action.payload,
    //             completed: false,
    //             id: Date.now()
    //         }

    //     ]
        
    // }

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
        default:
            return state;
    }


    return state;
}