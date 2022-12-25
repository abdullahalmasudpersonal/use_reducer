import React, { useContext } from 'react';
import Child from './Child';
import './Style.css';
import { COUNTER_CONTEXT } from '../App';

const Parent = () => {
   const {count} = useContext(COUNTER_CONTEXT);

    return (
        <div>
            <div className='parent'>
               {/*  <div className='parent-dev'>
                    <h1>Parent</h1>
                    <h1>0</h1>
                </div> */}
                  <div className='child-dev'>
                    <h1>Parent</h1>
                    <h1>{count}</h1>
                    <div>
                        {/* <button className='dec-btn' onClick={() => setCount(count - 1)}>
                            Decrement
                        </button>
                        <button className='incre-btn' onClick={() => setCount((preVious) => preVious + 1)}>
                            Increment
                        </button> */}
                        {/*  <button onClick={() => setCount(count + 1)}>
                        Increment
                    </button> */}
                    </div>
                </div>
                
                <Child />
            </div>
        </div>
    );
};

export default Parent;