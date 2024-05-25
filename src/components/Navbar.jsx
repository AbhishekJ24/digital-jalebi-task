import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false)

    return (
        <>
            <nav className='bg-slate-900 text-slate-200 flex justify-between items-center h-20 md:px-20 py-8 px-6 mb-10'>
                <div className='text-2xl font-extrabold'>
                    <a href="/"> Searchify </a>
                </div>
                <ul className='md:flex md:gap-10 md:visible hidden'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Playground">Playground</Link></li>
                    <li><Link to="/Docs">Docs</Link></li>
                </ul>
                <button className='bg-transparent border-none invert md:hidden hover:invert-0' onClick={() => { setMobileMenu(!mobileMenu) }}>
                        <img src="src/assets/menu.svg" alt="" />
                    </button>
                {mobileMenu &&
                    <ul className='absolute z-10 right-10 top-10 bg-slate-300 rounded-xl py-5 px-4 text-slate-950'>
                        <li className='mb-3'> Home </li>
                        <li className='mb-3'> Playground </li>
                        <li> Docs </li>
                    </ul>
                }
            </nav>
        </>
    )
}

export default Navbar
