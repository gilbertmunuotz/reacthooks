import React, { useState, useMemo } from 'react'

function Memo() {
    const [one, setOne] = useState(0)
    const [second, setSecond] = useState(0)

    const increment1 = () => {
        setOne(one + 1)
    }

    const increment2 = () => {
        setSecond(second + 1)
    }

    const isEven = useMemo(() => {
        let i = 0;
        while (i < 20000000000000000000000000000000000000000000000000000000000000000000n) {
            i++;
            return one % 2 === 0;
        }
    }, [one])


    return (
        <div className='Memo'>
            <div>
                <button onClick={increment1}>Value is:{one}</button>
                <span>{isEven ? 'Even' : 'Odd'}</span>
            </div>
            <div>
                <button onClick={increment2}>Value is:{second}</button>
            </div>
        </div>
    )
}

export default Memo