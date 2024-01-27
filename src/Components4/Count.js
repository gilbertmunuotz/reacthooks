import React from 'react'

function Count({ text, count }) {
    return (
        <div className='Count'>
            {text}
            {count}
        </div>
    )
}

export default React.memo(Count)