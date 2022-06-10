import React from 'react';
import { useDispatch } from 'react-redux';
import {logout}  from '../feature/user';

function Logout() {
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={ () => dispatch(logout({name: " ", age: 0, email: " " })) }> Logout </button>
        </div>
    );
}

export default Logout;