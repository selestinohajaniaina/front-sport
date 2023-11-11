import React from 'react'
import { Link } from 'react-router-dom'
import Entrainement from '../assets/entrainement.png'
import Kaly from '../assets/kaly.png'
import Accesoire from '../assets/accesoires.png'

const Data = [
    {
        id: 1,
        image: Entrainement,
        alt: 'entrainement',
        title: "Entraînements",
        subtitle: "L'entraînement régulier est fondamental pour préserver et améliorer la santé, et il est recommandé de le pratiquer plusieurs fois par semaine pour en optimiser les avantages physiques et mentaux.",
    },
    {
        id: 2,
        image: Kaly,
        alt: 'Régimes',
        title: "Régimes",
        subtitle: "Une alimentation équilibrée et adaptée permet d'optimiser les résultats sportifs, de réduire le risque de blessures et de promouvoir la santé globale.",
    },
    {
        id: 3,
        image: Accesoire,
        alt: 'Accesoires',
        title: "Accesoires",
        subtitle: "Trouvez les équipements parfaits pour exceller dans votre passion sportive et améliorer votre performance.",
    },
];

const ThirdPage = () => {
return (
    <section className='w-full flex flex-col gap-24 h-[290dvh]' id="offre">
        <article className='flex justify-center items-center w-full h-[20dvh]'>
            <h1 className='text-black text-4xl font-normal'>NOS OFFRES</h1>
        </article>
            {Data.map((item) => (
            <section key={item.id} className='w-full h-[70dvh] entrainement flex items-center'>    
                <section className={`section_entrainement grid h-[60dvh] gap-12 ${item.id === 2 ? 'reverse' : ''}`}>
                    <div className='flex justify-center'>
                        <img src={item.image} alt={item.alt} className='image_kaly' />
                    </div>
                    <article className='flex items-center'>
                        <div className='text-center flex items-center flex-col gap-4'>
                            <h1 className='text-cyan-950 text-4xl font-normal'>{item.title}</h1>
                            <p className='text-justify text-black text-2xl font-normal'>{item.subtitle}</p>
                            <Link to='/'>
                                <button className='bg-cyan-500 w-fit rounded-[50px] p-1.5 text-white text-2xl font-normal'>Voir plus</button>
                            </Link>
                        </div>
                    </article>
                </section>
                </section>
            )) }
    </section>
)
}

export default ThirdPage
