
const ComponentA =()=>{
    return(
        <div>
            <h3>ComponentA</h3>
        </div>
    )
}
export default ComponentA

export const ComponentB =()=>{
    return(
        <div>
            <h3>ComponentB</h3>
        </div>
    )
}



export const ComponentC =()=>{
    return(
        <div>
            <h3>ComponentC</h3>
        </div>
    )
}





// Exports :

// There are 2 ways to export a component 

// 1. default export 
// --> every module or every file can have only one default export 
// ---> for default export , while importing we can call with any name 
// 2. named export 
// ----> every module can have as many named exports 
// ---> only we can call with any name by using as keyword while importing 