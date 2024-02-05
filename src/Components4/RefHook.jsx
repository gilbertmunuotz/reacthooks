import React, { useEffect, useRef, useState } from 'react'

function RefHook() {
    // const myFocus = useRef(null)
    const myCount = useRef()

    const [count, setCount] = useState(0)

    useEffect(() => {
        // myFocus.current.focus()
        myCount.current = setInterval(() => {
            setCount(initialcount => initialcount + 1)
        }, 1000)
        return () => {
            clearInterval(myCount.current)
        }
    }, [])

    return (
        <div className='RefHook'>
            {/* <input type="text" ref={myFocus} /> */}
            Time is : {count}
            <button type="button" onClick={() => clearInterval(myCount.current)}>Clear</button>
        </div>
    )
}

export default RefHook