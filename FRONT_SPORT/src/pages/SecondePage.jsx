import React from 'react'
import PartenaireOne from '../assets/partenaire_one.png'
import PartenaireTwo from '../assets/partenaire_two.png'
import PartenaireThree from '../assets/partenaire_three.png'

const Src = [
    { src: PartenaireOne, alt: 'partenaire one' },
    { src: PartenaireTwo, alt: 'partenaire two' },
    { src: PartenaireThree, alt: 'partenaire three' }
];

const SecondePage = () => {
return (
    <main className='w-full h-[130dvh]'>
        <section className='w-full grid partenaire_nice h-[30dvh] bg-zinc-300'>
            {Src.map((item, index) => (
                <div key={index} className='flex justify-center h-[30dvh]'>
                    <img src={item.src} alt={item.alt} className='img_partenaire' />
                </div>
            ))}
        </section>
        <section className='w-full h-[100dvh] bg_about flex items-center' id="about">
            <article className='article_nice h-[85dvh] flex items-center bg-zinc-300 bg-opacity-30 rounded-[50px] backdrop-blur-[35px]'>
                <div className='div_nice flex flex-col gap-4'>
                    <div className='text-center'>
                        <h1 className='text-cyan-500 text-4xl font-bold'>A PROPOS</h1>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p className='text-justify text-white text-2xl font-normal'>
                            M’Chic a été conçue dans le but d'inspirer et d'éduquer les jeunes sur les avantages du sport et d'une alimentation équilibrée pour une vie saine. Notre mission est de motiver les jeunes à s'engager activement dans des activités sportives, en mettant en avant les bienfaits du sport pour la santé physique et mentale.
                        </p>
                        <p className='text-justify text-white text-2xl font-normal'>
                            Elle vise à encourager les jeunes à adopter des habitudes de vie saines et à les guider vers une meilleure compréhension de l'importance du sport et de la nutrition pour leur bien-être à long terme.
                        </p>
                        <p className='text-justify text-white text-2xl font-normal'>
                            Notre objectif est de créer un environnement interactif, informatif et motivant, où les jeunes peuvent apprendre, se connecter, se soutenir mutuellement et s'engager activement dans des activités sportives et une alimentation équilibrée pour une vie plus saine. Nous croyons que l'apprentissage à travers le sport et la nutrition est un élément essentiel de l'éducation globale des jeunes pour un avenir plus sain et plus heureux.
                        </p>
                    </div>
                </div>
            </article>
        </section>
    </main>
)
}

export default SecondePage
