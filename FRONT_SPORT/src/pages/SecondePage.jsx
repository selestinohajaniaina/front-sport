import React from 'react'

const SecondePage = () => {
return (
    <main className='w-full h-[130dvh]'>
        <section className='w-full h-[30dvh] bg-zinc-300'>

        </section>
        <section className='w-full h-[100dvh] bg_about flex items-center'>
            <article className='article_nice h-[85dvh] bg-zinc-300 bg-opacity-30 rounded-[50px] backdrop-blur-[35px]'>
                <h1 className='text-cyan-500 text-4xl font-bold'>A PROPOS</h1>
                <p className='text-justify text-white text-2xl font-bold'>
                    M’Chic a été conçue dans le but d'inspirer et d'éduquer les jeunes sur les avantages du sport et d'une alimentation équilibrée pour une vie saine. Notre mission est de motiver les jeunes à s'engager activement dans des activités sportives, en mettant en avant les bienfaits du sport pour la santé physique et mentale.
                </p>
                <p className='text-justify text-white text-2xl font-bold'>
                    Elle vise à encourager les jeunes à adopter des habitudes de vie saines et à les guider vers une meilleure compréhension de l'importance du sport et de la nutrition pour leur bien-être à long terme.
                </p>
                <p className='text-justify text-white text-2xl font-bold'>
                    Notre objectif est de créer un environnement interactif, informatif et motivant, où les jeunes peuvent apprendre, se connecter, se soutenir mutuellement et s'engager activement dans des activités sportives et une alimentation équilibrée pour une vie plus saine. Nous croyons que l'apprentissage à travers le sport et la nutrition est un élément essentiel de l'éducation globale des jeunes pour un avenir plus sain et plus heureux.
                </p>
            </article>
        </section>
    </main>
)
}

export default SecondePage
