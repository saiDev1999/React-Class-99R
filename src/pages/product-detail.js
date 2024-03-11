import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DNASpinner from '../components/funtional/spinners/dna-spinner'

function ProductScree() {
  const paramsInformation=useParams()
 const [productDetail,setProductDetail]=useState({})

  useEffect(()=>{
    fetchProductData()
  
  },[paramsInformation.product])

async function fetchProductData(){
   const result = await axios.get(`https://fakestoreapi.com/products/${paramsInformation.product}`)

   if(result.status===200){
    setProductDetail(result.data)

   }
   console.log(result)
}

function isEmpty(data){
  
  return Object.keys(data).length === 0
   
   
 }
   

  return (
    <div>
      {
        isEmpty(productDetail) 
        ?
        <DNASpinner />
   
        :
        <>
   
     
        <h3>{productDetail.category}</h3>
        <img src={productDetail.image} alt={productDetail.title} width={400} height={300} />
        </>

      }

    </div>
  )
}

export default ProductScree