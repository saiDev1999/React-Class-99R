import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeScreen from "../pages/home-screen"
import AboutScreen from "../pages/about-screen"
import ContactScreen from "../pages/contact-screen"
import SettingScreen from "../pages/setting-screen"
import ProductScree from "../pages/product-detail"
import InvalidScreen from "../pages/invalid-screen"
import { createContext, useState } from "react"
import RegistartionScreen from "../pages/preRoutes/registration"
import Loginscreen from "../pages/preRoutes/login"


export const MessageInformation=createContext()


const NavigationStack =()=>{
     const[message,setMessage]=useState("Good morning")
     const[login,seLogin]=useState(false)

     const changeMessage =()=>{
        setMessage("Good evening")
     }
     const loginHandler=()=>{
        seLogin(true)
     }

    return(
        <BrowserRouter>

        <MessageInformation.Provider
        
        value={{
            message,
            greetings:"Congrats",
            messageChanger:changeMessage,
            changeLogin:loginHandler

        }}
        
        >

 


        <Routes>


            {
                true
                ?
                <>
        
                 {/* List of routes in the app */}
        <Route  path="/" Component={HomeScreen}  />
        <Route  path="/about" Component={AboutScreen}  />
        <Route  path="/contact" Component={ContactScreen}  />
        <Route  path="/setting" Component={SettingScreen}  />

        <Route path="/:category/:product" Component={ProductScree} />
        </>:
        <>
   

<Route  path="/register" Component={RegistartionScreen}  />
<Route  path="/" Component={Loginscreen}  />
</>


            }


            
       

        <Route  path="*" Component={InvalidScreen} />

        </Routes>
        </MessageInformation.Provider>

        
        </BrowserRouter>
    )
}
export default NavigationStack


    // Tasks :

    // 1. Repeat the class 
    // 2. use context 4 examples
    // 3. protected routes in react 
    // 4. login authenication














// we have 2 types of routing 

// 1. static routing 
// 2. dynamic routing 


// we dont use anchor and window navigation  for react , reason it doesnt cause re-render while navigating 

// we need to dependent on third party for react navigation 

// 1. react-router-dom 

// npm i react-router-dom 


// pre login amazon :

// 1. registration 
// 2. login screen 
// 3. forgot pass word 
// 4. dashoboard 


// post login 
// 1. home screen 
// 2. setting 
// 3. about 
// 4. products 
// 5. product details 