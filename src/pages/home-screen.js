import React, { useContext } from 'react'
import Navbar from '../components/funtional/navBar/navbar'
import UseEffectEx2 from '../components/funtional/hooks/useEffect/useEffect2'
import { MessageInformation } from '../navigation/navigation'

function HomeScreen() {

 const {message,greetings,messageChanger} = useContext(MessageInformation)
//  console.log(sharedInformation,"sharedInformation")

  return (
    <div>

        <Navbar/>
        <h1>{message}</h1>
        <button onClick={messageChanger} >Click to change message</button>

        <UseEffectEx2/>
    </div>
  )
}

export default HomeScreen