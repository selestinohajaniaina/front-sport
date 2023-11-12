import React from 'react'
import Navbar from '../components/Navbar'
import Footer from './Footer'
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Datas = [
    {
        titlte: "COACH: Musculation",
    },
    {
        titlte: "ENTRAÎNEUR: Basket ball",
    },
    {
        titlte: "COACH: Zumba",
    }
];

const Entrainer = () => {
return (
    <div className='w-full h-[200dvh]'>
        <Navbar/>
            <section className='w-full h-[120dvh]'>
                <div className='w-full h-[24dvh] flex items-end'>
                    <div className='mx-[10rem] gap-12 w-fit flex items-center'>
                        <Link to='/'>
                            <FaArrowLeftLong/>
                        </Link>
                        <h1 className='text-black text-[46px] font-normal'>Entrainement</h1>
                    </div>
                </div>
                <div className='w-full flex items-center justify-center gap-6 h-[96dvh]'>
                    {Datas.map((item) => (
                        <section className='h-[60dvh] w-[30%]' key={item.id}>
                        <video 
                            controls 
                            muted 
                            loop 
                            width="auto"
                            >
                                <source 
                                    src='https://www.shutterstock.com/shutterstock/videos/1093929207/preview/stock-footage-happy-family-father-teaches-daughter-to-ride-bike-in-park-daughter-riding-bike-for-first-time.webm'
                                    type='video/webm'
                                />
                        </video>
                        <article className='flex items-center justify-center w-full h-[20dvh]'>
                            <h2 className='text-black text-[26px] font-normal'>{item.titlte}</h2>
                        </article>
                    </section>
                    ))}
                </div>
            </section>
        <Footer/>
    </div>
)
}

export default Entrainer
