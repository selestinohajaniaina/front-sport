import React from 'react'
import Instagram from '../assets/instagram.svg'
import Facebook from '../assets/facebook.svg'
import Linkdeen from '../assets/linkdeen.svg'
import Heart from '../assets/heart.svg'
import { useFormik } from 'formik'

const Datas = [
    {
        id: 1,
        image: Instagram,
        name: "instagram",
    },
    {
        id: 2,
        image: Facebook,
        name: "Facebook"
    },
    {
        id: 3,
        image: Linkdeen,
        name: "LinkedIn"
    }
];

const Footer = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            message: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
return (
    <footer className='w-full h-[80dvh] flex items-center bg-cyan-950' id='contact'>
        <div className='h-[70dvh] relative grid px-12 gap-12 div_footer'>
            <article className='flex flex-col items-center justify-center gap-12 h-[70dvh]'>
                <div className='flex justify-center gap-6 h-[8dvh]'>
                    {Datas.map((item) => (
                        <img key={item.id} src={item.image} alt={item.name} className='cursor-pointer' />
                    )) }
                </div>
                <div className='text-center'>
                    <p className='text-white text-opacity-80 text-lg font-normal'>Tous droits réservés &copy; <span className='text-cyan-500 text-lg font-bold'>M'chic 2023</span> </p>
                </div>
            </article>
            <div className='h-[70dvh]'>
                <article className='h-[20dvh]'>
                    <h1 className='text-center text-white text-[32px]'>DEMANDE DE DEVIS</h1>
                    <p className='text-center my-4 text-white text-opacity-80 text-xl font-normal'>Remplissez ce formulaire pour nous soumettre vos besoins!</p>
                </article>
                <section className='h-[50dvh] flex justify-center items-center'>
                    <form onSubmit={formik.handleSubmit} className='grid gap-2 w-[80%]'>
                        <input type="email" name="email" id="email" onChange={formik.handleChange} value={formik.values.email} placeholder='Votre email ici' className='bg-zinc-300 rounded-[10px] shadow border border-black p-2' />
                        <textarea name="message" id="message" onChange={formik.handleChange} value={formik.values.message} cols="30" rows="5" className='resize p-2 bg-zinc-300 rounded-[10px] shadow border border-black' placeholder='Vos besoin'></textarea>
                        <div className='flex justify-end'>
                            <button type="submit" className='bg-cyan-500 rounded-[5px] p-2 w-fit text-white text-lg mx-4'>Valider</button>
                        </div>
                    </form>
                </section>
            </div>
            <p className='absolute flex items-center justify-center bottom-0 left-[45%] text-white text-opacity-80 text-[9px] font-normal'> <img src={Heart} alt="heart"/> Designed by <span className='text-cyan-500 text-[9px] font-normal'>Tathie</span> </p>
        </div>
    </footer>
)
}

export default Footer
