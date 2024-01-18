import React, { useReducer } from 'react'

const initialState = 0
const reducerfn = (CurrentState, action) => {
    switch (action) {
        case 'increment':
            return CurrentState + 1; // Use semicolons to end statements
        case 'decrement':
            return CurrentState - 1;
        case 'reset':
            return initialState;
        default:
            return CurrentState; // Provide a default return value
    }
}

function UseReducer() {
    const [state, dispatch] = useReducer(reducerfn, initialState)
    return (
        <div className='UseReducer'>
            <div>count : {state}</div>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    )
}

export default UseReducer