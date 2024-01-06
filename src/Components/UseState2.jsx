import React, { useState } from 'react'

function UseState2() {

    const initialValue = 0
    const [Count, setCount] = useState(initialValue)
    const addFive = () => {
        // for (let i = 0; i < 5; i++) {
        //     setCount(initialCount => initialCount + 1)
        // }


        //OR

        // setCount(Count + 5)
    }
    return (
        <div className='UseState2'>
            Count:{Count}

            {/* This is an Increment Based on Initial value */}
            <button onClick={() => setCount(initialCount => initialCount + 1)}>Increase</button>
            {/* Normal Decrement */}
            <button onClick={() => setCount(Count - 1)}>Decrease</button>
            <button onClick={() => setCount(initialValue)}>Reset</button>
            <button onClick={addFive}>Add 5</button>
        </div>
    )
}

export default UseState2