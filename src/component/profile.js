import React from 'react';
import {useSelector} from 'react-redux';

function Profile() {
    const user = useSelector((state) => ( state.value))
    console.log(user)
    return (
        <div>
            <p> name: {user.name} </p>
            <p> Age: {user.age}  </p>
            <p> email: {user.email} </p>
        </div>
    );
}

export default Profile;