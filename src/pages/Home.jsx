// import React from 'react'

const Home = () => {
  return (
    <div>
      <div className='relative items-center justify-between w-full h-[500px] mx-auto mt-10 text-white bg-red-400 max-w-maxContent'>
        <div className='absolute top-0 left-0 h-[100%] w-[5%] shadow-[60px_0px_80px_-15px_rgba(255,255,255,0.9)]'>
          on
        </div>
        <div className='absolute top-0 right-10 h-[100%] w-[5%] shadow-[-60px_0px_80px_-15px_rgba(255,255,255,0.9)]'>
          two
        </div>
      </div>
    </div>
  )
}

export default Home
