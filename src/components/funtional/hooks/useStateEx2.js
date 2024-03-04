import { useState } from "react"



const UseStateExample2=()=>{
    const[timer,setTimer]=useState(100)
    const handleTimer=()=>{
        setInterval(()=>{
            setTimer(time=>time-1)
        },1000)

    }
    return(
        <>
        <h1>Timer value {timer}</h1>
        <button onClick={handleTimer} >Start timer</button>
         
        </>
    )
}

export default UseStateExample2

