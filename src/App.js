import { createContext, useState } from 'react';
import './App.css';
import Parent from './pages/Parent';
import ShortForm from './pages/ShortForm';
import LoginForm from './pages/LoginForm';
import Counter from './pages/Counter';

export const COUNTER_CONTEXT = createContext();

function App() {
  const [count, setCount] = useState(0);

  const value = {count, setCount};

  return (
    <div>

      {/* <Counter/> */}

     {/*  <LoginForm /> */}
      
   {/*    <ShortForm/> */}
      
    {/*   <COUNTER_CONTEXT.Provider value={value}>
        <div>
          <Parent />
        </div>
      </COUNTER_CONTEXT.Provider> */}
    </div>
  );
}

export default App;
