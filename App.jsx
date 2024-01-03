import { useCallback, useState,useEffect } from 'react'

import './App.css'

function App() {
  
  const [length, setlength] = useState(8);
  const [numallowed,setnumallowed]=useState(false);
  const [charallowed,setcharallowed]=useState(false);
  const [password,setpassword]=useState("");
  const passgen=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numallowed)
    {
      str+="1234567890";
    }
    if(charallowed)
    {
      str+="!@#$%^&*(){}[]?/><.,\\|";
    }
    for(let i=1;i<=length;i++)
    {
        let char=Math.floor(Math.random()*str.length +1);
        pass+=str.charAt(char);

    }
    setpassword(pass);
    
  },[length,numallowed,charallowed,setpassword])
  useEffect(()=>{passgen()},[length,numallowed,charallowed,passgen]);
  return (
    <>
    <div className='container'>
      
      <h1 >Password Genrator</h1>
      <input type="text" value={password} placeholder='type your password here' readOnly></input>
      <div>
        <input type="range" min={6} max={100} value={length} onChange={(e)=>{setlength(e.target.value)}}></input>
        <label>length:{length}</label>
      
      
        <input type="checkbox" defaultChecked={numallowed} onChange={()=>{setnumallowed((prev)=>!prev)}} id="fornumber"/>
        <label htmlFor="fornumber">Number</label>
        <input type="checkbox" defaultChecked={charallowed} onChange={()=>{setcharallowed((prev)=>!prev)}} id="forchar"/>
        <label htmlFor="forchar">Char</label>
      </div>
      
    
    
    </div>
    <div>
      <img className="image" src="https://shorturl.at/KRU23" alt=""></img>
    </div>
   </> 
    
  )
}

export default App
