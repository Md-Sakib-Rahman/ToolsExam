import React, { useEffect, useState } from 'react'
import Cards from './Cards/Cards'
import Icon from '../../assets/Icon.png'

const Contents = ({typeCategory, isSortClicked}) => {
    const [url, setUrl] = useState('https://openapi.programming-hero.com/api/videos/category/1000')
    const [contents, setContents] = useState([])
    const getCategoryUrl = (category) => {
        switch (category) {
          case 'Music':
            return 'https://openapi.programming-hero.com/api/videos/category/1001';
          case 'Comedy':
            return 'https://openapi.programming-hero.com/api/videos/category/1003';
          case 'Drawing':
            return 'https://openapi.programming-hero.com/api/videos/category/1005';
          case 'All':
          default:
            return 'https://openapi.programming-hero.com/api/videos/category/1000';
        }
      };
    useEffect(() => {
        
        const url = getCategoryUrl(typeCategory);
        
        
        fetch(url)
            .then(res => res.json())
            .then(res => {setContents(res.data)
                console.log(contents)
            }) 
            .catch(err => console.error('Error fetching data:', err)) 
    }, [url, typeCategory]) 

    return (
        <>
            {contents.length > 0 ? (
                    contents.map((content) => (
                        <Cards  content={content} /> 
                    ))
                ) : (
                    <div className='w-[100vw] flex flex-col items-center'>
                        <img className='mx-auto mt-20' src={Icon} alt="" />
                        <h1 className='text-3xl'>Not Found</h1>
                    </div>
                )}
        </>
    )
}

export default Contents
