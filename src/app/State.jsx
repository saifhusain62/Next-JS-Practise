import React, { useState } from 'react'

function State() {

     const [value,setvalue] = useState(0);

     const add = () =>{
        setvalue(value+1)
     }
  return (
    <div>

       <p>Value is Added:<span className='bg-amber-800 p-3 m-3 rounded'>{value}</span></p>
       <button onClick={add} className='bg-black p-2 rounded'>Increment</button>
    </div>
  )
}

export default State
