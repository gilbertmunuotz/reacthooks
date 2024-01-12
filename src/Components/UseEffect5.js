import React, { useEffect, useState } from 'react'

function UseEffect5() {

    let mycount = 0
    const [count, setCount] = useState(mycount)



    useEffect(() => {

        const Tick = () => {
            setCount(count + 1)
        }

        const myTimer = setInterval(Tick, 1000)


        return () => {
            clearInterval(myTimer)
        }
    }, [count])

    return (
        <div className='UseEffect5'>

            {count}

        </div>
    )
}

export default UseEffect5