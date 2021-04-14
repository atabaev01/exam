import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header jumbotron'>
            <NavLink to='people'>People</NavLink>
            <NavLink to='korabl'>Vehicles</NavLink>
            <NavLink to='planets'>Planets</NavLink>
        </div>
    );
};

export default Header;