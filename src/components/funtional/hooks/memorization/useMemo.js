
import React, { useMemo, useState } from 'react'

function UseMemo() {
    const[counter1,setCounter1]=useState(10)

    const[counter2,setCounter2]=useState(10)

   const isEven=useMemo(()=>{
        for(let i=0;i<10000;i++){
            console.log(i)
        }
        console.log("is Even checker")
        return counter1%2===0 ? "EVEN":"ODD"
    },[counter1])
   

  return (
    <div>
        <h3>{isEven} Counter A</h3>
        <h3>Counter A {counter1}</h3>
        <button onClick={()=>setCounter1(counter1+1)} >Change Counter A</button>
        <h3>Counter B {counter2}</h3>
        <button onClick={()=>setCounter2(counter2+1)} >Change Counter A</button>

    </div>
  )
}

export default UseMemo

// Tasks:
// 1. Repeat the class
// 2. Perform crud operation using usereducer 
// 3. global counter using  contextapi  and useReducer 
// 4. 3 examples on useReducer and useMemo 