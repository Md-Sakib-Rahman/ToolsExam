import {React, useState} from 'react'
import Logo from '../../assets/Logo.png'
import Contents from '../Contents/Contents'
const Home = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [typeCategory, setTypeCategory] = useState('All')
  const handleCategoryClick = (category) => {
    setTypeCategory(category)
    setActiveCategory(category)
  }
  return (
    <>
        
            <div className='flex justify-between items-center mt-10 mx-10'>
                <div className='w-[33%]'>
                    <img src={Logo} className='w-36' alt="" />
                </div>
                <div className='w-[33%] flex justify-center items-center'>
                    <button className='bg-[#252525]/20 p-1 rounded-lg'>Sort by view</button>
                </div>
                <div className='w-[33%] flex justify-end items-center'>
                <button className='bg-[#FF1F3D] text-white p-1 px-2 rounded-lg'>Blog</button>
                </div>
            </div>
            <hr className='mt-10 '/>
            <div className='flex justify-center items-center gap-10 mt-10 mx-10'>
            <button
          onClick={() => handleCategoryClick('All')}
          className={`text-white p-1 px-4 rounded-lg min-w- ${activeCategory === 'All' ? 'bg-[#FF1F3D]' : 'bg-[#252525]/20'}`}
        >
          All
        </button>
        <button
          onClick={() => handleCategoryClick('Music')}
          className={`text-white p-1 px-4 rounded-lg min-w- ${activeCategory === 'Music' ? 'bg-[#FF1F3D]' : 'bg-[#252525]/20'}`}
        >
          Music
        </button>
        <button
          onClick={() => handleCategoryClick('Comedy')}
          className={`text-white p-1 px-4 rounded-lg min-w- ${activeCategory === 'Comedy' ? 'bg-[#FF1F3D]' : 'bg-[#252525]/20'}`}
        >
          Comedy
        </button>
        <button
          onClick={() => handleCategoryClick('Drawing')}
          className={`text-white p-1 px-4 rounded-lg min-w- ${activeCategory === 'Drawing' ? 'bg-[#FF1F3D]' : 'bg-[#252525]/20'}`}
        >
          Drawing
        </button>
            </div>

            <div className='grid grid-cols-4 mx-10 '>
            <Contents typeCategory={typeCategory} />
            </div>
        
    </>
  )
}

export default Home
