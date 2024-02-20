

const JsxFunctional =()=>{

    const object={
        name:"mahesh",
        age: 23,
        width:100,
        height:100
    }


    return(
        <div>

  

        <h2>
          Good morning  {object.name}
          
        </h2>
        <h3 className="hello" >{object.name}</h3>
        <button onClick={()=>{}} >click</button>
        <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" width={object.width} height={object.height}></img>
        <>
  {/* Hello world */}
  <div className="awesome" style={{ border: "1px solid red" }}>
    <label htmlFor="name">Enter your name: </label>
    <input type="text" id="name" />
  </div>
  <p>Enter your HTML here</p>
</>

        </div>

    )
}

export default JsxFunctional

// to write jsx we have some rules 
// 1. Every component should have single parent (that parent should be a container)
// 2. Every attributes must be camel case 
// 3. every class must be replaced with className 
// 4. Every tag must be enclosed

// React team suggesting to use only JsxFunctional

// 2013 :



// 2018 : reactmajor updates 

// complete switch functional 



