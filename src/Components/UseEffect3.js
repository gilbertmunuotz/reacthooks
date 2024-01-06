import React, { useState, useEffect } from 'react'

function UseEffect3() {

    let initialValue = 0
    const [X, setX] = useState(initialValue)
    const [Y, setY] = useState(initialValue)

    const mousePosition = (e) => {
        console.log('clicked');
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('Component Rendered');
        window.addEventListener('mousemove', mousePosition)
    }, [])

    return (
        <div className='UseEffect3'>
            Hooks X:{X} Y:{Y}
        </div>
    )
}

export default UseEffect3