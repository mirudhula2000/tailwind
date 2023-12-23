import React from 'react'
import logo from '../assets/Logo.png'

const Header = () => {
    return (
        <header>
            <section className='flex flex-row items-center justify-between  bg-rose-600 p-5 max-[599px]:flex-col'>
                <div className='flex items-center gap-2 text-yellow-500 font-semibold'>
                    <a href='/'><img className='w-10'src={logo} alt=''/></a>
                    <h2>BinCode</h2>

                </div>
                <div>
                    <button className='bg-lime-400 text-blue-700 w-40 mx-2 rounded-md text-2xl'>AboutUS</button>
                    <button className='bg-lime-400 text-blue-700 w-40 mx-2 rounded-md text-2xl'>Contact</button>
                    <a href='#features' className=' text-yellow-300 mx-2 rounded-md text-2xl'>Features</a>

                </div>

            </section>
        </header>
    )
}

export default Header