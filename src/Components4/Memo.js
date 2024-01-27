import React, { useState } from 'react'

function Memo() {
    const [one, setOne] = useState(0)
    const [second, setSecond] = useState(0)

    const increment1 = () => {
        setOne(one + 1)
    }

    const increment2 = () => {
        setSecond(second + 1)
    }

    const isEven = () => {
        return one % 2 === 0;
    }

    return (
        <div className='Memo'>
            <div>
                <button onClick={increment1}>Value is:{one}</button>
                <span>{isEven() ? 'Even' : 'Odd'}</span>
            </div>
            <div>
                <button onClick={increment2}>Value is:{second}</button>
            </div>
        </div>
    )
}

export default Memo