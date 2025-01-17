import React from 'react'
import Icon from '../../../assets/Icon.png'
const Cards = ({content}) => {
    // console.log('from cards : ', contents)
    const { thumbnail, title, authors, others } = content;
  return (
    <>
        <div className='flex flex-col justify-center items-center  w-[312px] h-[320px] p-2 gap-10 mt-10'>
            <div className=' w-[300px] items-center'><img className='w-[312px] h-[200px] object-fill mx-auto rounded-xl' src={thumbnail} alt="" /></div>
            <div className='self-start gap-4 flex flex-col'>
                    <div className='flex gap-4'>
                     <img className='w-8  h-8 object-cover rounded-xl' src={authors[0].profile_picture} alt="" />   
                    <h1>{title}</h1>
                    </div>
                    <div>
                        <h2></h2>
                        <h2>100k Views</h2>
                    </div>
            </div>
        </div>
       
    </>
  )
}

export default Cards
