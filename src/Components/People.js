import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const dataTransform = (item) => {
    const arrNum = item.url.match(/\d/g); 
    const id = arrNum.join("");
    return {...item,id}
}

const People = () => {
    const [people, setPeople] = useState([])
    console.log(people)
    useEffect(async () => { 
        const data = await axios.get('https://swapi.dev/api/people').then((res) => {
            return res.data.results.map(dataTransform)
        })
        setPeople(data)
    }, [])

    return (
        <div className='container'>

            {
                people.map(item => (
                    <div className='table-bordered' key={item.id}>
                        <th><Link to={"/people/" + item.id}>{item.name}</Link></th>
                    </div>
                ))
            }
        </div>
    );
};

export default People;