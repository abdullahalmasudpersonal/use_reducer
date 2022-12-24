import React, { useState } from 'react';

const Child = () => {
    const [count, setCount] = useState(100);

    return (
        <div>
            <div>
                <h1>{count}</h1>
                <div>
                    <button onClick={() => setCount(count - 1)}>
                    Decrement
                    </button>
                    <button onClick={() => setCount((preVious) => preVious + 1)}>
                        Increment
                    </button>
                   {/*  <button onClick={() => setCount(count + 1)}>
                        Increment
                    </button> */}
                </div>
            </div>

        </div>
    );
};

export default Child;