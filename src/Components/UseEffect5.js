import React, { useEffect, useState } from 'react'

function UseEffect5() {

    let mycount = 0
    const [count, setCount] = useState(mycount)

    const Tick = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        const myTimer = setInterval(Tick, 1000)

        return () => {
            clearInterval(myTimer)
        }
    }, [])

    return (
        <div className='UseEffect5'>

            {count}

        </div>
    )
}

export default UseEffect5