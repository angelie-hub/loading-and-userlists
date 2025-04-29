import React, { useEffect, useState } from 'react';
import './Loading.css';
import loadingGif from './paimon.gif';


const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const [status, setStatus] = useState('idle');

    useEffect(() => {
        setStatus('loading');
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        setTimeout(() => {
            setUsers([
                { id: 1, name: 'Beidou' },
                { id: 2, name: 'Ningguang' },
                { id: 3, name: 'Jean' },
                { id: 4, name: 'Lisa' },
                { id: 5, name: 'Yanfei' },
                { id: 6, name: 'Hu Tao' },
                { id: 7, name: 'Yelan' },
                { id: 8, name: 'Arlecchino' },
                { id: 9, name: 'Ei' },
                { id: 10, name: 'Yae Miko' },
            ]);
            setStatus('idle');
        }, 3000);
    };

    const handleAdd = () => {
        if (name.trim()) {
            setUsers((prevUsers) => [...prevUsers, { id: Date.now(), name }]);
            setName('');
            setError('');
        } else {
            setError('Please enter a valid name.');
        }
    };

    const handleDelete = (id) => {
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    };

    if (status === 'loading') {
        return (
            <div className="loader">
                <img src={loadingGif} alt="Loading..." className="loading-gif" />
                <div className='loader_text'>
                    <h1>Paimon is doing her best to fetch your data...</h1>
                </div>
            </div>
        );
    }

    if (status === 'failed') {
        return <p className="fail">Failed to load users.</p>;
    }


    return (
        <div>
            <div className="containerUF">
                <img src='/genshinlogo.png' alt="icon" className='genshin-logo'></img>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Username"
                    className="input"
                />
                <button
                    className="addUserBtn"
                    onClick={handleAdd}
                    disabled={!name.trim()}
                >
                    Add User
                </button>
                {error && <p>{error}</p>}
            </div>

            <ul className="fetchingUL">
                <h2 className="fu">Paimon's Fetched Users</h2>
                <div className="listOfUSER">
                    {users.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </div>
            </ul>
            <h2>Delete Users</h2>
            <ul className="containerUL">
                {users.map((user) => (
                    <li className="listItem" key={user.id}>
                        <div className="un">{user.name}</div> 
                        <button
                            className="deleteBtn"
                            onClick={() => handleDelete(user.id)}
                        >
                            Delete
                        </button> 
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default UserManagement;