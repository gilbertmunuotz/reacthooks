import React from 'react'
import { UserContext } from "../App";

function UseContext3() {
    return (
        <div className='UseContext3'>
            <UserContext.Consumer>
                {
                    name => {
                        return <h2>User value {name}</h2>
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default UseContext3