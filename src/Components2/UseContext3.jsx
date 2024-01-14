import React, { useContext } from 'react'
import { UserContext, MyContext } from "../App";

function UseContext3() {

    const user = useContext(UserContext)
    const channel = useContext(MyContext)

    return (
        <div className='UseContext3'>
            {user}   :)  {channel}
        </div>
    )   
}

export default UseContext3