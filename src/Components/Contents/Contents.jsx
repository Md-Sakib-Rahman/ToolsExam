import React, { useEffect, useState } from 'react'
import Cards from './Cards/Cards'

const Contents = () => {
    const [url, setUrl] = useState('https://openapi.programming-hero.com/api/videos/category/1000')
    const [contents, setContents] = useState([])

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(res => {setContents(res.data)
                console.log(contents)
            }) 
            .catch(err => console.error('Error fetching data:', err)) 
    }, [url]) 

    return (
        <>
            {contents.length > 0 ? (
                    contents.map((content) => (
                        <Cards  content={content} /> 
                    ))
                ) : (
                    <p>Loading content...</p>
                )}
        </>
    )
}

export default Contents
