import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = (false)
  const [charAllowed, setCharAllowed] = (false)
  const [password, setPassword] = ("")
  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "01234567890"
    if (charAllowed) str += "!@#$%^&*()_+-={}[]|"

    for(let i=1; i<array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass = str.charAt(char)
    }
    setPassword = pass
  }, [length, numberAllowed, charAllowed, password])

  return (
    <>
      <input type="range" 
        min={6} 
        max={8} 
        value={length}
        onChange={(e)=>{setLength(e.target.value)}}
      />
      <label>Length: {length}</label>
      <input type='checkbox'
      defaultChecked={numberAllowed}
      id = "numberInput"
      onChange={()=>{setNumberAllowed(prev=>!prev)}}
      />
    </>
  )
}

export default App
 