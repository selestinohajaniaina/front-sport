import React from 'react'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../firebase'
import { Link } from 'react-router-dom'
import * as Yup from 'yup';
import axios from 'axios'

const Signup = () => {
    const navigate = useNavigate();
    const URL = 'https://sport-back.onrender.com';
    // const URL = 'http://localhost:3000';
    const formik = useFormik({
        initialValues: {
            lastname: '',
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            lastname: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
            email: Yup.string().email('Invalide email address').required('Required'),
            password: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
        }),
        onSubmit: async (values) => {
            const { email, lastname, password } = values;
            const options = {
                method : 'POST',
                url : `${URL}/person/add`,
                body : {
                    username: lastname,
                    email: email,
                    password: password,
                    pays: '',
            }}
            console.log(options.body);
                try {
                    const response = await axios.get(`${URL}/person/add/${lastname}/${email}/${password}`);
                navigate("/dashboard");
                // console.log(response);
                } catch (error) {
                    console.error(error);
                }
        }
    })
return (
<div className='bg_login flex items-center w-full h-[100dvh]'>
        <div className='content_login h-[80dvh] flex items-center justify-center bg-zinc-300 bg-opacity-30 rounded-[50px] backdrop-blur-[50px]'>
            <form onSubmit={formik.handleSubmit} className='flex flex-col gap-6 justify-center h-[70dvh] w-[55%]'>
                <input type='text' name="lastname" id="prenom" className='p-4 bg-zinc-300 text-black text-opacity-50 bg-opacity-50 border border-cyan-950' placeholder='Prénom' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lastname} />
                <input type="email" name="email" id="email" className='p-4 bg-zinc-300 text-black text-opacity-50 bg-opacity-50 border border-cyan-950' placeholder='Email' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                <input type="password" name="password" id="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} placeholder='Mot de passe' className='p-4 bg-zinc-300 bg-opacity-50 border text-black text-opacity-50 border-cyan-950' />
                <div className='w-full h-[10dvh] grid best-login'>
                    <article className='gap-2 flex flex-col'>
                        <Link to="/login" className='text-white text-opacity-70 text-xl font-normal'>As-tu déja un compte?</Link>
                    </article>
                    <div className='flex items-center justify-center'>
                        <button type="submit" className='bg-cyan-500 rounded-[50px] px-2.5 py-1.5 text-white text-2xl font-normal'>S'inscrire</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
)
}

export default Signup
