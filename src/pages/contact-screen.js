import React, { useContext } from 'react'
import Navbar from '../components/funtional/navBar/navbar'
import { MessageInformation } from '../navigation/navigation'
import ParentComponentMemo from '../components/funtional/memo/parent'
import ParentCallback from '../components/funtional/hooks/useCallback/parentCallback'

function ContactScreen() {
  const{message}=useContext(MessageInformation)
  return (
    <div>
        <Navbar/>
        {/* <h2>{message}</h2> */}
        {/* <ParentComponentMemo/> */}
        <ParentCallback/>
    </div>
  )
}

export default ContactScreen