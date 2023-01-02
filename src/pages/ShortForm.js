import React, { useState } from 'react';
import './Style.css';

const ShortForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submit = (event) =>{
        event.preventDefault();
        const data = {
            firstName,
            lastName,
            email,
            password
        }
        console.log(data);
    }

    return (
        <div  className='short-form'>
            <form onSubmit={submit} className='short-form-dev'>
                <div>
                    <label>First Name</label> <br/>
                    <input type='text' name='name' id='name' onClick={(e) => setFirstName(e.target.value)} />
                </div>
                <div>
                    <label>Last Name</label> <br/>
                    <input type='text' name='name' id='name' onClick={(e) => setLastName(e.target.value)} />
                </div>
                <div>
                    <label>Email</label> <br/>
                    <input type='text' name='name' id='name' onClick={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password</label> <br/>
                    <input type='password' name='name' id='name' onClick={(e) => setPassword(e.target.value)} />
                </div>
                <button type='submit'>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ShortForm;