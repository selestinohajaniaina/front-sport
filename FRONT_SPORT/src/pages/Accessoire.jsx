import React from 'react'
import Navbar from '../components/Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { FaArrowLeftLong } from 'react-icons/fa6'
import ProduitOne from '../assets/produit_one.png'
import ProduitTwo from '../assets/produit_two.png'

const Datas = [
    { img: ProduitTwo, alt: 'product two' },
    { img: ProduitOne, alt: 'product one' },
];

const Accessoire = () => {
return (
    <div className='w-full'>
        <Navbar/>
            <section className='w-full h-[100dvh]'>
                <div className='w-full h-[24dvh] flex items-end'>
                    <div className='mx-[10rem] gap-12 w-fit flex items-center'>
                        <Link to='/'>
                            <FaArrowLeftLong/>
                        </Link>
                        <h1 className='text-black text-[46px] font-normal'>Accessoires</h1>
                    </div>
                </div>
                <section className='w-full h-[76dvh] flex justify-center items-center'>
                    <div className='flex items-center justify-around w-[90%] h-[60dvh]'>
                        {Datas.map((item) => (
                        <section key={item.id} className='relative'>
                            <img src={item.img} alt={item.alt} className='img-accessoire' />
                            <button className='bg-cyan-500 rounded-[50px] absolute p-1.5 text-lg text-white left-[38%] bottom-[20%]'>Plus de détails</button>
                        </section>
                        ))}
                    </div>
                </section>
            </section>
        <Footer/>
    </div>
)
}

export default Accessoire
