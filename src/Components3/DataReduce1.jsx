import React, { useState, useEffect } from 'react'

function DataReduce1() {
    const [posts, setPosts] = useState([])

    const [error, setError] = useState('')

    useEffect(() => {
        let url = 'https://jsonplaceholder.typicode.com/posts/'
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setPosts(data)
                setError('')
            })
            .catch((error) => {
                setPosts([])
                setError('Error...! Failed To Fetch')
            })
    }, [])

    return (
        <div className='DataReduce1'>
            {posts.map(post => <li key={post.id}>{post.title}</li>)}
            : (
            (<p>{error}</p>)
            )
        </div>

    )
}

export default DataReduce1