import React, { useReducer, useEffect } from 'react'

function DataReduce2() {

    const initialState = {
        error: '',
        posts: [],
        loading: true, // Add loading state
    }

    const reduce = (state, action) => {
        switch (action.type) {
            case 'Fetch_Success':
                return {
                    ...state,
                    posts: action.payload,
                    error: ''
                }
            case 'Fetch_Failed':
                return {
                    ...state,
                    posts: [],
                    error: 'Error....Failed To Fetch'
                }
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reduce, initialState)

    useEffect(() => {
        let url = 'https://jsonplaceholder.typicode.com/posts'
        fetch(url)
            .then((response) => response.json()) //Parse JSON Response
            .then((data) => dispatch({ type: 'Fetch_Success', payload: data }))
            .catch((error) => dispatch({ type: 'Fetch_Failed' }));
    }, [])

    return (
        <div className='DataReduce2'>
            {state.error ? (
                <p>{state.error}</p>
            ) : state.posts && state.posts.length > 0 && ( // Conditional rendering
                <ul>
                    {state.posts.map((post) => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default DataReduce2