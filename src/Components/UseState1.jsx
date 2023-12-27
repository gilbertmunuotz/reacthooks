import React, { useState } from 'react'

function UseState() {

    const [counter, setcounter] = useState(0)

    return (
        <div className='UseState'>
            <button type="button" onClick={() => setcounter(counter + 1)}>Click Me {counter}</button>
        </div>
    )
}

export default UseState