import React from 'react'
import Navbar from '../components/funtional/navBar/navbar'
import UseReducer from '../components/funtional/hooks/useReducer/useReducer'
import UseMemo from '../components/funtional/hooks/memorization/useMemo'

function SettingScreen() {
  return (
    <div>
        <Navbar/>
        {/* <UseReducer/> */}
        <UseMemo/>
    </div>
  )
}

export default SettingScreen