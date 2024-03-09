import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeScreen from "../pages/home-screen"
import AboutScreen from "../pages/about-screen"
import ContactScreen from "../pages/contact-screen"
import SettingScreen from "../pages/setting-screen"
import ProductScree from "../pages/product-detail"





const NavigationStack =()=>{

    return(
        <BrowserRouter>
        <Routes>
        {/* List of routes in the app */}
        <Route  path="/" Component={HomeScreen}  />
        <Route  path="/about" Component={AboutScreen}  />
        <Route  path="/contact" Component={ContactScreen}  />
        <Route  path="/setting" Component={SettingScreen}  />

        <Route path="/:category/:product" Component={ProductScree} />

        </Routes>

        
        </BrowserRouter>
    )
}
export default NavigationStack














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