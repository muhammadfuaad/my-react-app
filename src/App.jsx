import { useCallback, useState } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false); // Corrected initialization
  const [charAllowed, setCharAllowed] = useState(false); // Corrected initialization
  const [password, setPassword] = useState(""); // Corrected initialization

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "01234567890";
    if (charAllowed) str += "!@#$%^&*()_+-={}[]|";

    for (let i = 0; i < length; i++) { // Corrected loop and array reference
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char); // Corrected appending characters to the password
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  return (
    <>
      <h1 className='text-green'>Assalam-o-alaikum wrwb!</h1>
      <input type="range" 
        min={6} 
        max={8} 
        value={length}
        onChange={(e)=>{setLength(e.target.value)}}
        className='border-red'
      />
      <label>Length: {length}</label>
      <input type='checkbox'
        defaultChecked={numberAllowed}
        id="numberInput"
        onChange={() => {setNumberAllowed(prev => !prev)}}
      />
      <input type="text"
        value = {password}
        placeholder='password'
        readOnly
      />
      {/* Add other UI components or features as needed */}
    </>
  );
}

export default App;
