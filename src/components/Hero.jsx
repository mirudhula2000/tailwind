import React from 'react'
import hero_img from '../assets/Hero_section.png'

const Hero = () => {
  return (
    <body>
        <section className='flex items-center max-[560px]:flex-col'>
            <div>
                <img  className='w-4/3'src={hero_img} alt=''/>
            </div>
            <div className='m-10'>
                <h1 className='text-6xl'> Programming </h1>
                <br/>
                <p>**********************************************************</p>
                <br/>
                <p className='text-2xl text-violet-800'>Excited to get your future started in the line of coding...</p>
                <p className='text-2xl text-red-600'>Your destination to learn it all in one place is here...</p>
                 <p className='text-2xl text-pink-900'>Carpe diem!!!</p>
            </div>
        </section>
    </body>
  )
}

export default Hero