import React, { useState, useEffect } from 'react'

function UseEffect2() {

    let initialCount = 0

    const [count, setCount] = useState(initialCount)

    const [name, setName] = useState('')

    useEffect(() => {
        console.log('clicked');
        document.title = `You Clicked me ${count}`
    }, [count])


    return (
        <div className='UseEffect2'>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>Click {count}</button>
        </div>
    )
}

export default UseEffect2