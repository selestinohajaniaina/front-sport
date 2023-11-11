import React from 'react'
import Navbar from '../components/Navbar'
import Footer from './Footer'

const Entrainer = () => {
return (
    <div className='w-full h-[200dvh]'>
        <Navbar/>
            <section className='w-full h-[120dvh] border border-red-400'>
                <div className='w-full h-[20dvh] border border-orange-400'>

                </div>
            </section>
        <Footer/>
    </div>
)
}

export default Entrainer
