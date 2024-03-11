import React from 'react'
import { useNavigate } from 'react-router-dom'

function InvalidScreen() {
    const naviagate =useNavigate()

      const navigateToHome=()=>{
        naviagate("/")
    

      }
  return (
    <div>
        <h5>URL not found , 404 Status</h5>
        <button onClick={navigateToHome}  >Click to home</button>

    </div>
  )
}

export default InvalidScreen