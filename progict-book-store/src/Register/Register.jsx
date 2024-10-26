import React, { useState } from 'react';
import './Register.css';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({});


    const Validate = () => {
        let tempErrors = {};
        if (!name) {
            tempErrors.name = "Username is required";
        }
        if (!email) {
            tempErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            tempErrors.email = "*Email is invalid*";
        }
        if (!password) {
            tempErrors.password = 'Password is required ';
        }
        else if (password.length < 6) {
            tempErrors.password = "Password must be at least 6 characters";
        }

        setError(tempErrors);
        return Object.keys(tempErrors).length === 0;

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Validate()) {
            console.log(name, email, password);
        }

    }



    return (
        <div className='reg'>
            <>
                <h2 className='hh2'>انشاء حساب </h2>
                <form onSubmit={handleSubmit}>
                    <label>Username</label>
                    <br />
                    <input type='text' placeholder='Ahmed' value={name} onChange={(e) => setName(e.target.value)} />
                    {error.name && <p style={{ color: 'red' }}>{error.name}</p>}
                    <br />

                    <label>Email</label>
                    <br/>
                    <input type='email' placeholder='mattsmith@mail.com' value={email} onChange={(e) => setEmail(e.target.value)} />
                    {error.email && <p style={{ color: 'red' }}>{error.email}</p>}
                    <br />

                    <label>Password</label>
                    <br />
                    <input type='password' placeholder='.......' value={password} onChange={(e) => setPassword(e.target.value)} className="password" />
                    {error.password && <p style={{ color: 'red' }}>{error.password}</p>}
                    <br />
                    <button type="submit" className='btn'>انشاء حساب </button>
                
                </form>












            </>
        </div>
    )
}

export default Register