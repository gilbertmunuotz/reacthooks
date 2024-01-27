import React from 'react'

function Button({ handleClick }) {
    return (
        <div className='Button'>
            <button type="button" onClick={handleClick}>Increment</button>
        </div>
    )
}

export default React.memo(Button)