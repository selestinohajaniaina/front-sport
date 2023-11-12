import React from 'react'
import Navbar from '../components/Navbar'
import Footer from './Footer'
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Spagetti from '../assets/spaghettis.png'
import Epinard from '../assets/épignard.png'

const Datas = [
    {
        image: Spagetti,
        alt: 'spagetti',
        title: 'Spaghettis de courgette',
        para: "Ingrédients: une courgette, un filet de poisson, une tomate, l’huile d’olive",
    },
    {
        image: Epinard,
        alt: 'epinard',
        title: 'Omelette avec pousses d’épignards poêlées',
        para: "Ingrédients: 3 oeufs, un demi d’avocats, pousses d’épignards, une tomate, huile",
    }
];

const Regime = () => {
return (
    <div className='w-full h-[210dvh]'>
        <Navbar/>
            <section className='w-full h-[130dvh]'>
                <div className='w-full h-[24dvh] flex items-end'>
                    <div className='mx-[10rem] gap-12 w-fit flex items-center'>
                        <Link to='/'>
                            <FaArrowLeftLong/>
                        </Link>
                        <h1 className='text-black text-[46px] font-normal'>Régimes</h1>
                    </div>
                </div>
                <div className='h-[96dvh] w-full flex flex-col gap-6'>
                    {Datas.map((item) => (
                        <div className='h-[48dvh]' key={item.id}>
                        <section className='special_cusine flex gap-6 h-[48dvh]'>
                            <div className='w-[40%]'>
                                <img src={item.image} alt={item.alt} className='spe-cus' />
                            </div>
                            <article className='w-[60%] flex flex-col gap-6 justifies-center'>
                                <div className='my-6'>
                                    <h2 className='text-black text-[26px] font-semibold'>{item.title}</h2>
                                    <p className='text-black text-lg font-normal '>{item.para}</p>
                                </div>
                                <div className='flex items-center w-full h-[10dvh] '>
                                    <button className='p-3 bg-cyan-500 text-lg text-white rounded-[50px]'>Obtenir la recette</button>
                                </div>
                            </article>
                        </section>
                    </div>
                    )) }
                </div>
            </section>
        <Footer/>
    </div>
)
}

export default Regime
