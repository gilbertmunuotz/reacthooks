import React, { useState, useEffect } from 'react'

function DataFetch() {

  const [data, setData] = useState([])

  useEffect(() => {
    let url = 'https://jsonplaceholder.typicode.com/posts'
    fetch(url)
      .then(response => response.json())
      .then(data => {
        return setData(data);
      })
      .catch(error => {
        console.log(error);
      })
  }, [])


  return (
    <div className='DataFetch'>
      <ul>
        {data.length > 0 ? ( // Conditionally render if data is available
          data.map(data => <li key={data.id}>{data.title}</li>)
        ) : (
          <p>Loading posts...</p> // Show a loading message initially
        )}
      </ul>
    </div>
  )
}

export default DataFetch