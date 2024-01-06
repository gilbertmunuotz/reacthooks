import React, { useState } from 'react'

function UseState3() {

    const [Name, setName] = useState({ firstName: '', secondName: '' })

    return (
        <form action="">
            <input type="text" value={Name.firstName} onChange={(e) => setName({ firstName: e.target.value })} />
            <input type="text" value={Name.secondName} onChange={(e) => setName({ secondName: e.target.value })} />
            <h1> FirstName is: {Name.firstName}</h1>
            <h1> SecondName is: {Name.secondName}</h1>
        </form>
    )
}

export default UseState3