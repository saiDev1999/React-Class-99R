import { useState } from "react"






const UseStateExmple3 =()=>{
    // const arry=["banana","apple","watermelon"] --> wrong way 


    const[fruits,setFruits]=useState(["apple","banana","watermelon"])
  // this function is to add dummy fruit inthe current list 
    const addFruits=()=>{
      const newList=[...fruits,"new fruit"]
      setFruits(newList)
    }


    return(
        <>
        <h2>fruits listing</h2>
        <button onClick={addFruits} >Add Fruits</button>
        <ol>

   
        {
            fruits.map((eachFruit,index)=><li key={index} >{eachFruit}</li>)
        }
             </ol>

        </>
    )
}
export default UseStateExmple3



// tasks :
// 1. repeat the class 
// 2. 4 different data types , useState examples 
// 3. delete option to fruits 
// 4. ui for fruit addition , take any dummy images 