import React, { useContext } from 'react'
import Navbar from '../components/funtional/navBar/navbar'
import { MessageInformation } from '../navigation/navigation'

function ContactScreen() {
  const{message}=useContext(MessageInformation)
  return (
    <div>
        <Navbar/>
        <h2>{message}</h2>
    </div>
  )
}

export default ContactScreen