import axios from "axios"
import React, { useEffect, useState } from "react"
import DNASpinner from "../../spinners/dna-spinner"




const UseEffectEx2 =()=>{
    const[products,setProducts]=useState([])
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((response)=>{
            if(response.status===200){
                setProducts(response.data)
            }else{
                alert("something went wrong")
            }
       
        })
    },[])
    return(
        <>
        <h1>UseEffect example</h1>
        {
            products.length>0
            ?

            products.map((eachObject)=>{
                return(
                    <React.Fragment key={eachObject.id} >
                    <h2>{eachObject.title}</h2>
                    <img src={eachObject.image} width={200} height={200} />
                    <h5>{eachObject.price}</h5>
                    </React.Fragment>

                )
            })
            :
            <DNASpinner/>
        }
        </>
    )
}
export default UseEffectEx2