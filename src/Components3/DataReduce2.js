import React, { useReducer, useEffect } from 'react'

function DataReduce2() {

    const initialState = {
        error: '',
        posts: []
    }

    const reducerfn = (state, action) => {
        switch (action.type) {
            case 'Fetch_Success':
                return {
                    post: action.payload,
                    error: ''
                }
            case 'Fetch_Failed':
                return {
                    post: [],
                    error: 'Error....Failed To Fetch'
                }
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(initialState, reducerfn)

    return (
        <div className='DataReduce2'>



        </div>
    )
}

export default DataReduce2