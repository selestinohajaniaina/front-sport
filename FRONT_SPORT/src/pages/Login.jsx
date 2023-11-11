import React from 'react'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../firebase'
import { Link } from 'react-router-dom'
import * as Yup from 'yup';
import axios from 'axios'

const Login = () => {
    const navigate = useNavigate();
    const URL = 'https://sport-back.onrender.com';
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalide email address').required('Required'),
            password: Yup.string().max(8, 'Must be 8 characters or less').required('Required'),
        }),
        onSubmit: async (values) => {
            const options = {
                method: 'GET',
                url: `${URL}/user/${values.email}`,
            };
                try {
                    const response = await axios.request(options);
                    const {data} = response.data;
                    if(await data[0]){
                        const {id, password, } = data[0];
                        if (values.password == password){
                            navigate("/dashboard");
                        }else {
                            alert('mot de passe incorect');
                        }
                    }else{
                        alert('compte introuvable');

                    }
                } catch (error) {
                    console.error(error);
                }
        }
    })
return (
    <div className='bg_login flex items-center w-full h-[100dvh]'>
        <div className='content_login h-[80dvh] flex items-center justify-center bg-zinc-300 bg-opacity-30 rounded-[50px] backdrop-blur-[50px]'>
            <form onSubmit={formik.handleSubmit} className='flex flex-col gap-6 justify-center h-[70dvh] w-[55%]'>
                <input type="email" name="email" id="email" className='p-4 bg-zinc-300 text-black text-opacity-50 bg-opacity-50 border border-cyan-950' placeholder='Email' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                <input type="password" name="password" id="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} placeholder='Mot de passe' className='p-4 bg-zinc-300 bg-opacity-50 border text-black text-opacity-50 border-cyan-950' />
                <div className='w-full h-[10dvh] grid best-login'>
                    <article className='gap-2 flex flex-col'>
                        <Link to="/" className='text-white text-opacity-70 text-xl font-normal'>Mot de passe oublié</Link>
                        <Link to="/signup" className='text-white text-opacity-70 text-xl font-normal'>S’inscrire</Link>
                    </article>
                    <div className='flex items-center justify-center'>
                        <button type="submit" className='bg-cyan-500 rounded-[50px] px-2.5 py-1.5 text-white text-2xl font-normal'>Se connecter</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
)
}

export default Login
