import React, { useState, useEffect } from 'react'

function UseEffect() {
    let initialCount = 0
    const [Count, setCount] = useState(initialCount)

    useEffect(() => {
        document.title = `You Cliked me ${Count} Times`
    })
    return (
        <div className='UseEffect'>
            <button onClick={() => setCount(Count + 1)}>Click {Count}</button>
        </div>
    )
}

export default UseEffect