import React, { useEffect, useState } from 'react'
import axios from 'axios'


const API_KEYS = 'uXvnp8V8eMZZAuCuV9NN4ACWSS1nPijHD4GKJ4TsFor016lM4LFfvGd3';
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
            <div className='section-hero border border-amber-400 h-[90dvh]'>
                <article></article>
                <section>
                <video 
                    controls 
                    muted 
                    loop 
                    width="300"
                    
                    >
                        <source 
                            src={''}
                            type={''}
                        />
                    {console.log(data.video_files[0])}
                </video>
                </section>
            </div>
        </section>
    )
}

export default CallApi