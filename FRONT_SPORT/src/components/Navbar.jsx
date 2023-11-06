import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const scrollToElement = (elementId) => {
        const element = document.getElementById(elementId);
        if(element){
            element.scrollIntoView({behavior: 'smooth'});
        }
    }
return (
    <nav className='w-full py-3 bg-[#363062] flex items-center justify-center sticky top-0'>
        <div className='nav-bar flex justify-between'>
            <Link to='/' className='text-[#E0F4FF] font-semibold'>
                Acceuil
            </Link>
            <div>
                <ul className='flex gap-12 text-[#E0F4FF] font-semibold capitalize'>
                    <li>à propos</li>
                    <li>nos offres</li>
                    <li>contact</li>
                    <li>services</li>
                </ul>
            </div>
            <Link to='/' className='text-[#E0F4FF] text-xl font-semibold'>
                Logo
            </Link>
        </div>
        
    </nav>
)
}

export default Navbar
