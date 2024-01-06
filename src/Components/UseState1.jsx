import React, { useState } from 'react'

function UseState1() {

    const [count, setCount] = useState(0)

    return (
        <div className='UseState1'>
            <button onClick={() => setCount(count + 1)}>Click Me {count}</button >
        </div >
    )
}

export default UseState1