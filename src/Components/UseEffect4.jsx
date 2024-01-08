import React, { useState } from 'react'
import UseEffect3 from './UseEffect3'

function UseEffect4() {

    const [display, setDisplay] = useState(true)

    return (
        <div className='UseEffect4'>
            <button onClick={() => setDisplay(!display)}>Toggle Button</button>
            {display && <UseEffect3 />}
        </div>
    )
}

export default UseEffect4