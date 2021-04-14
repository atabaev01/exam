import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Planets = () => {
    const [planets, setPlanets] = useState([])

    useEffect( async () => {
        const res = await axios.get('https://swapi.dev/api/planets')
        setPlanets(res.data.results)

    }, [])


    return (
        <div className='container'>
           
            {
                planets.map(item => (
                    <div className='table' key={item.name}>
                        <p>{item.name}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default Planets;