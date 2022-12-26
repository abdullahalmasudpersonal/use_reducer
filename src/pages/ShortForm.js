import React, { useState } from 'react';
import './Style.css';

const ShortForm = () => {
    const [firstName, setFirstName] = useState('');

    const submit = (event) =>{
        event.preventDefault();
        console.log(firstName);
    }

    return (
        <div  className='short-form'>
            <form onSubmit={submit} className='short-form-dev'>
                <div>
                    <label>First Name</label> <br/>
                    <input type='text' name='name' id='name' onBlur={(e) => setFirstName(e.target.value)} />
                </div>
                <div>
                    <label>Lust Name</label> <br/>
                    <input type='text' name='name' id='name' onBlur={(e) => setFirstName(e.target.value)} />
                </div>
                <div>
                    <label>Email</label> <br/>
                    <input type='text' name='name' id='name' onBlur={(e) => setFirstName(e.target.value)} />
                </div>
                <div>
                    <label>Password</label> <br/>
                    <input type='password' name='name' id='name' onBlur={(e) => setFirstName(e.target.value)} />
                </div>
                <button type='submit'>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ShortForm;