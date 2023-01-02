import React, { useReducer } from 'react';
import { initialState, reducer } from './FormReducer';
import './LoginForm.css';

const LoginForm = () => {
    const initialState = {
        firstName: '',
        lustName: '',
        email: '',
        gender: '',
        education: '',
        quantity: 0,
        feedback: '',
        term: true
    };

    const reducer = (state, action) => {
        // console.log(action)
         switch (action.type) {
            case 'INPUT':
                return {
                    ...state,
                    [action.payload.name]: action.payload.value,
                };
         /*    case 'TOGGLE':
                return {
                    ...state,
                    term: !state.term,
                };
            case 'DECREMENT':
                return {
                    ...state,
                    [action.payload.name]: state - action.payload.value
                }; */
            default:
                return state;
        } 

         /*  if (action.type === 'INPUT') {
              return {
                  ...state,
                  [action.payload.name]: action.payload.value,
              };
          }; */
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const submit = (event) => {
        event.preventDefault();
        console.log(state)
    };

    return (
        <div className='loginform'>
            <div className='login-div'>
                {/*   <h3 className='text-center'>Login</h3> */}

                <form onSubmit={submit}>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <label>First Name</label><br />
                            <input type='text' name='firstName'
                                id='firstName'
                                onClick={(e) => dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value }, })} />
                        </div>
                        <div>
                            <label>Last Name</label ><br />
                            <input type='text' name='lustName' onClick={(e) => dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value }, })} />
                        </div>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <label>Email</label><br />
                            <input type='email' name='email' onClick={(e) => dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value }, })} />
                        </div>
                        <div>
                            <h6>Gender</h6>
                            <div className='d-flex'>
                                <div>
                                    <input type='radio' name='gender'
                                        value='male'
                                        onClick={(e) => dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value }, })} />&ensp;
                                    <label>Male</label>
                                </div>
                                <div>
                                    <input type='radio' name='gender'
                                        value='female' onClick={(e) => dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value }, })} />&ensp;
                                    <label>Female</label>
                                </div>
                                <div>
                                    <input type='radio' name='gender'
                                        value='other'
                                        onClick={(e) => dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value }, })} />&ensp;
                                    <label>Other</label>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='d-flex justify-content-between my-2'>
                        <div className='education'>
                            <label>Education</label> <br />
                            <select className='' name='education' onChange={(e) => dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value }, })} >
                                <option>SSC</option>
                                <option>HSC</option>
                                <option>Undergrad</option>
                                <option>Graduate</option>
                            </select>
                        </div>
                        <div>
                            <h6>Number of PCs</h6>
                            <div>
                                <button className='decrement' onClick={() => dispatch({ type: "DECREMENT", payload: 5 })}>-</button>

                                <input name='quantity' ></input>

                                <button className='increment'>+</button>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h6>Feedback</h6>
                        <textarea name='feedback' onClick={(e) => dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value }, })} ></textarea>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <p>
                        {/*     <input type="checkbox" name='term' onBlur={() => dispatch({ type: 'TOGGLE' })} /> &ensp;
                            <label><small>I agree to terms and conditions</small></label> */}
                        </p>
                        <input type='submit' value='Submit' /* disabled={state.term} */ />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;