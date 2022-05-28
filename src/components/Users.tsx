import React, { useEffect, useState } from 'react';
import UserModel from '../types/models';
import User from './User';

const Users = () => {
    const [users, setUsers] = useState<UserModel[]>([])
    const [team, setTeam] = useState<UserModel[]>([])
    // console.log(team);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])


    const handleAddUser = (user: UserModel): void => {
        const newTeam = [...team, user];
        setTeam(newTeam)
    }

    return (
        <div>
            <h1>My user</h1>
            <h4>Team size: {team.length}</h4>
            {/* <User name='Rohomot' age={55} addUser={handleAddUser}></User> */}
            {
                users.map(user => <User user={user} addUser={handleAddUser}></User>)
            }
        </div>
    );
};

export default Users;