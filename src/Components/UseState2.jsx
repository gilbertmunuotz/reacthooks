import React, { useState } from 'react'

function UseState2() {

    let InitialState = 0;
    const [count, setcount] = useState(InitialState)

    const Increment5 = () => {
        for (let i = 0; i < 5; i++) {
            setcount(count => count + 1);
        }
    }
    return (
        <div className='UseState2'>
            Count: {count}
            <button type="button" onClick={() => setcount(InitialState)}>Reset</button>
            <button type="button" onClick={() => setcount(count => count + 1)}>Increase</button>
            <button type="button" onClick={() => setcount(count => count - 1)}>Decrease</button>
            <button type="button" onClick={Increment5}>Incerement 5</button>
        </div>
    )
}

export default UseState2