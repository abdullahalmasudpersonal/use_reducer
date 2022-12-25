import React, { useContext, useState } from 'react';
import './Style.css';
import { COUNTER_CONTEXT } from '../App';

const Child = () => {
    const {count, setCount} = useContext(COUNTER_CONTEXT);
   

    return (
        <div>
            <div>
                <div className='child-dev'>
                    <h1>Child</h1>
                    <h1>{count}</h1>
                    <div>
                        <button className='dec-btn' onClick={() => setCount(count - 1)}>
                            Decrement
                        </button>
                        <button className='incre-btn' onClick={() => setCount((preVious) => preVious + 1)}>
                            Increment
                        </button>
                        {/*  <button onClick={() => setCount(count + 1)}>
                        Increment
                    </button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Child;