
// other react features (life cycle methods)

// import { useEffect } from "react"
// import App from "../../../../App"



// useEffect: Use effect hook let you perform the side effects in functional based components like 
// data fetching , dom manipulation , event listeners , timers and subscribtions


// use effect is equlavalent to 
// 1. component did mount 
// 2. component did update 
// 3. component will unmount 

// syntax : use effect will accepts 2 args 
// 1. callback function 
// 2. array (dependency array)

// useEffect(()=>{},[])

// case 1: no dependency array 
// useEffect(()=>{})
// component will re-renders whenver state or prop changes in the App
// always re-renders 

// case 2: empty dependency array 
// useEffect(()=>{},[])
// useEffect will act like component did mount 

// case 3: dependency array with state or prop 
// useEffect(()=>{},[counter])
// useEffect will re-render only when counter changes 
// component did update 










