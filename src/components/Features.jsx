import React from 'react'
import python from '../assets/python.png'
import java from '../assets/java.png'
import net from '../assets/.net.png'

const Features = () => {
  return (
   <body>
    <h2 id='features' className='text-indigo-700 text-2xl text-center p-2'>Features</h2>
    {/* <div className='flex flex-row justify-evenly p-3'>
      <a  href ='#python' className='bg-pink-500 w-40 text-xl font-medium text-yellow-400'>PYTHON</a>
      <a className='bg-pink-500 w-40 text-xl font-medium text-yellow-400'>JAVA</a>
      <a className='bg-pink-500 w-40 text-xl font-medium text-yellow-400'>.NET</a>
    </div> */}
    <br/>
    <hr/>
    <div className='flex  flex-col justify-center items-center'>
    <section className='flex w-1/2 border-8 border-indigo-600 items-center p-3 m-10'>
      <div id='python'>
      <h1>PYTHON</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis necessitatibus sapiente doloremque assumenda officia, nesciunt, eum id iure quo, libero odio voluptates explicabo optio pariatur quod voluptatem quis voluptate fuga.</p>
      </div>
      <div><img className='w-1/4 m-10' src={python} alt=''/></div>
      
    </section>
    <section className='flex w-1/2 border-8 border-indigo-600 items-center p-3 m-10'>
      <div>
      <h1>JAVA</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis necessitatibus sapiente doloremque assumenda officia, nesciunt, eum id iure quo, libero odio voluptates explicabo optio pariatur quod voluptatem quis voluptate fuga.</p>
      </div>
      <div><img className='w-1/4 m-10' src={java} alt=''/></div>
      
    </section>
    <section className='flex w-1/2 border-8 border-indigo-600 items-center p-3 m-10'>
      <div>
      <h1>.NET</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis necessitatibus sapiente doloremque assumenda officia, nesciunt, eum id iure quo, libero odio voluptates explicabo optio pariatur quod voluptatem quis voluptate fuga.</p>
      </div>
      <div><img className='w-1/4 m-10' src={net} alt=''/></div>
      
    </section>
    </div>
   </body>
  )
}

export default Features