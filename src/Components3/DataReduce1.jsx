import React, { useState, useEffect } from 'react'

function DataReduce1() {

    const [loading, setLoading] = useState(true)

    const [error, setError] = useState('')

    const [data, setData] = useState({})

    useEffect(() => {
        let url = 'https://jsonplaceholder.typicode.com/posts'
        fetch(url)
            .then(response => response.json()
                .then(data => {
                    setLoading(false)
                    setError('')
                    setData(data)
                })
                .catch(error => {
                    setLoading(false)
                    setData([])
                    setError('Error Failed To fetch')
                    console.log(error)
                });
    }, [])
    return (
        <div className='DataReduce1'>
            {loading ? 'Loading...' : (
                <pre>{JSON.stringify(data, null, 2)}</pre>
            )}
            {error && <div className='error'>{error}</div>}
        </div>
    )
}

export default DataReduce1