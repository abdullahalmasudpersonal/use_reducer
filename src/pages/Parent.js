import React, { useState } from 'react';
import Child from './Child';
import './Style.css';

const Parent = () => {
    const [count, setCount] = useState(0);

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
                
                <Child count={count} setCount={setCount} />
            </div>
        </div>
    );
};

export default Parent;