import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'


const API_KEYS = 'uXvnp8V8eMZZAuCuV9NN4ACWSS1nPijHD4GKJ4TsFor016lM4LFfvGd3';
const heading_hero_page = 'sport: “ super santé, super forme”';
const para_hero_page = 'Le sport renforce le corps et le maintien en forme, tout en apportant une sensation de bien-être mentale';
const para_hero_video = 'L’exercice regulier: renforce le corps, libère le stress et favorise la positivité';
const CallApi = () => {
    const [data, setData] = useState({});
    const src_id = 3192198;
    useEffect(() => {
        async function fetchData() {
            const options = {
                method: 'GET',
                url: `https://api.pexels.com/videos/videos/${src_id}`,
                headers: {
                    Authorization: API_KEYS,
                }
            };
                
                try {
                    const response = await axios.request(options);
                    setData(response.data);
                        console.log(response.data);
                } catch (error) {
                    console.error(error);
                }
        }
        fetchData();
    }, []);
    return(
        <section>
            <div className='section-hero grid grid-cols-2 gap-4 h-[90dvh]'>
                <article className='flex flex-col justify-center gap-12'>
                    <div className='flex flex-col gap-6'>
                        <h1 className='text-white text-4xl font-normal'>{heading_hero_page}</h1>
                        <p className='text-white text-opacity-80 text-2xl font-normal'>{para_hero_page}</p>
                    </div>
                    <div className='flex justify-around'>
                        <button>
                            <Link to='/signup' className='bg-cyan-500 rounded-[50px] px-2.5 py-1.5 text-white text-2xl font-normal'>
                                S’inscrire
                            </Link>
                        </button>
                        <button>
                            <Link to='/login' className='bg-cyan-500 rounded-[50px] px-2.5 py-1.5 text-white text-2xl font-normal'>
                                Se connecter
                            </Link>
                        </button>
                    </div>
                </article>
                <section className='flex flex-col gap-12 justify-center'>
                <video 
                    controls 
                    muted 
                    loop 
                    width="auto"
                    poster={data.image}
                    >
                        <source 
                            src='https://www.shutterstock.com/shutterstock/videos/1093929207/preview/stock-footage-happy-family-father-teaches-daughter-to-ride-bike-in-park-daughter-riding-bike-for-first-time.webm'
                            type='video/webm'
                        />
                    {console.log(data.image)}
                </video>
                <article>
                    <p className='text-cyan-500 text-2xl font-normal'>{para_hero_video}</p>
                </article>
                </section>
            </div>
        </section>
    )
}

export default CallApi