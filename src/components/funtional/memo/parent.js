import React, { useState } from 'react'
import ChildMemo from './child'

function ParentComponentMemo(){
    const[count,setCount]=useState(0)
  return (
    <div>
        <h3>Counter value {count}</h3>
        <button onClick={()=>{
            setCount(count+1)
        }} >Change counter value</button>
        <ChildMemo/>
    </div>
  )
}

export default ParentComponentMemo