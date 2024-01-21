import React, { useContext } from 'react'
import { MyContext } from '../App'

function UseReducer2() {

    const nestedContext = useContext(MyContext)

    return (
        <div className='UseReducer2'>
            <h1>useReducer</h1>
            <button type="button" onClick={() => nestedContext.countDispatch('increment')}>Increment</button>
            <button type="button" onClick={() => nestedContext.countDispatch('decrement')}>Decrement</button>
            <button type="button" onClick={() => nestedContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default UseReducer2