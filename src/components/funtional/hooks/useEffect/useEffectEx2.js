import { useEffect, useState } from "react"






const UseEffectEx3 =()=>{
    const[X,setX]=useState(null)
    useEffect(()=>{
        window.addEventListener("mousemove",(event)=>{
            // console.log("mouse moving event capturing",event)
            setX(event.clientX)
     console.log(event.clientX,"x-axis")
     console.log(event.clientY,"y-axis")

        })
     return ()=>{
        console.log("unmounting")
     }
    },[])
    return(
        <>
        <h1>Useeffect3</h1>
        <h1>X-axis {X}</h1>
        </>
    )
}
export default UseEffectEx3
