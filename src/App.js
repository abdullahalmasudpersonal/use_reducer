import { createContext, useState } from 'react';
import './App.css';
import Parent from './pages/Parent';
import ShortForm from './pages/ShortForm';

export const COUNTER_CONTEXT = createContext();

function App() {
  const [count, setCount] = useState(0);

  const value = {count, setCount};

  return (
    <div>
      <ShortForm/>
      
    {/*   <COUNTER_CONTEXT.Provider value={value}>
        <div>
          <Parent />
        </div>
      </COUNTER_CONTEXT.Provider> */}
    </div>
  );
}

export default App;
