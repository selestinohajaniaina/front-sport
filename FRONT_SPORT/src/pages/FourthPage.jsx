import React from 'react'
import Coach from '../assets/coach.png'
import Dieteticien from '../assets/Diététicien.png'

const Datas = [
    {
        id: 1,
        name: "Coach",
        image: Coach,
        subheading: "Entraîneur/ Coach sportif",
        desc: "L’entraîneur ou un coach est un guide ou un mentor qui peut aider les sportifs à atteindre leurs objectifs et à devenir la meilleure version d’eux_mêmes.",
    },
    {
        id: 2,
        name: "diététicien",
        image: Dieteticien,
        subheading: "Nutritionniste/ Diéticien",
        desc: "Il est important de choisir un professionnel qualifié et compétent pour obtenir les meilleurs résultats en vous aidant à adopter une alimentation saine et équilibrée.",
    }
];

const FourthPage = () => {
return (
    <section className='w-full h-[100dvh]' id='services'>
        <div className='w-full h-[15dvh] flex items-center justify-center'>
            <h1 className='text-black text-4xl font-normal'>NOS SERVICES</h1>
        </div>
        <div className='w-full h-[85dvh] flex items-center'>
            <section className='h-[74dvh] grid gap-12 services'>
                {Datas.map((item) => (
                    <div className='flex justify-center' key={item.id}>
                        <section className='w-[61%]'>
                            <div className='h-[35dvh]'>
                                <img src={item.image} alt={item.name} className='coach' />
                            </div>
                            <article className='border h-[39dvh] flex flex-col gap-2 border-cyan-500'>
                                <div className='flex flex-col gap-2'>
                                    <h2 className='text-cyan-500 text-2xl py-[0.1rem] px-1'>{item.subheading}</h2>
                                    <p className='text-justify text-black text-xl font-normal px-1'>{item.desc}</p>
                                </div>
                                <div className='flex justify-center'>
                                    <button className='bg-cyan-500 w-fit rounded-[50px] p-1.5 text-white text-base font-normal'>Voir plus</button>
                                </div>
                            </article>
                        </section>
                    </div>
                ))}
            </section>
        </div>
    </section>
)
}

export default FourthPage
