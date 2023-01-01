import React, { useReducer } from 'react';

const Counter = () => {

    const initialState = 0;
    const reducer = (state, action) =>{
        console.log(action)
        if(action.type === 'INCREMENT'){
            return state + action.payload.count;
        }
        else if(action.type === 'DECREMENT'){
            return state - action.payload;
        }
    };
    const [state, dispatch] = useReducer(reducer, initialState);


    return (
        <div>
            <div>
                    <h1>Counter: {state}</h1>
                    <div>
                        <button  onClick={() => dispatch({type:"DECREMENT", payload:1})} >Decrement</button>
                        <button className='' onClick={() => dispatch({type:"INCREMENT", payload:{count:5}})}>Increment</button>
                    </div> 
                </div>
        </div>
    );
};

export default Counter;