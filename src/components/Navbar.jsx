import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false)
    const loc = useLocation()

    useEffect(() => {
        setMobileMenu(false)
    }, [loc])


    return (
        <>
            <nav className='bg-slate-900 text-slate-200 flex justify-between items-center h-20 md:px-20 py-8 px-6 mb-10'>
                <div className='text-3xl font-extrabold'>
                    <a href="/"> Searchify </a>
                </div>
                <ul className='xl:flex xl:gap-10 xl:visible hidden'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Playground">Playground</Link></li>
                    <li><Link to="/Docs">Docs</Link></li>
                </ul>
                <button className='bg-transparent border-none invert xl:hidden hover:invert' onClick={() => { setMobileMenu(!mobileMenu) }}>
                    <img src="menu.svg" alt="" />
                </button>
                {mobileMenu &&
                    <ul className='absolute z-10 right-10 top-10 bg-slate-300 rounded-xl py-5 px-4 text-slate-950'>
                        <li className='mb-3'> <Link to="/"> Home </Link> </li>
                        <li className='mb-3'> <Link to="/Playground"> Playground </Link> </li>
                        <li> <Link to="/Docs"> Docs </Link> </li>
                    </ul>
                }
            </nav>
        </>
    )
}

export default Navbar
