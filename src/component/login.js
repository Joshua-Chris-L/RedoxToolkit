import React from 'react';
import { useDispatch } from 'react-redux';
import {login} from "../feature/user";

function Login() {
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => dispatch(login({name: "Pedro", age: 20, email: "pedro@gmail.com " }))}> Login </button>
        </div>
    );
}

export default Login;