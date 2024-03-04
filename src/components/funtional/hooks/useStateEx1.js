import { useState } from "react"

const UseStateExample1 = () => {
    const[counter, setCounter] = useState(0)

    //This function is used to increment the current counter value by 1 
    const handleChange = (value) => {
        switch (value) {
            case "increment":
                setCounter(counter+1)
                break
            case "decrement":
                setCounter(counter - 1)
                break
            case "reset":
                setCounter(0)
                break
            default:
                break
        }
    }

    return (
        <>
            <h1>Use state example</h1>
            <h3>Current counter value {counter}</h3>
            <button onClick={() => handleChange("increment")} >Increment</button>
            <button onClick={() => handleChange("decrement")} >Decrement</button>
            <button onClick={() => handleChange("reset")} >Reset</button>
        </>
    )
}

export default UseStateExample1


// useState -- useState is a hook , which creates and tracks the state changing in the functional based components 

// create and manage the state 

// syntax :  

// step1 :useState hook will accept the initial state 

// useState(0)

// step2 :useState hook will return the array 

// array contains 2 elements 
// 1. currentState ---> current state value  0
// 2. Updater Function -->to update the current state

// const arry =useState(0)

// const [currentState,updaterFunction]=useState(0)





