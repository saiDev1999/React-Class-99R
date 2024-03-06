import { useRef } from "react"



const UncontrolledCompo=()=>{
    const usernameRef = useRef(null)
    const passwordRef=useRef(null)

    const submitHandler=(event)=>{
        //Prevents the auto submission of a form
        event.preventDefault()
        console.log(usernameRef.current.value)


        //collecting the input from form and storing in a variable
        const username=usernameRef.current.value
    const password=passwordRef.current.value
//performing the basic validation
    if(username.length>5 && password.length>5){
        // invalid info
        alert("username and password must be less than 5 characters")

    }else{
        //valud info 
        console.log(username,password)
    let userInfo={
        username:username,
        password:password
    }
    console.log(userInfo)

    }
    
     

    }
    return(
        <form onSubmit={submitHandler}   >
  <div className="mb-3 mt-3">
    <label htmlFor="email" className="form-label">
      Email:
    </label>
    <input
      type="text"
      className="form-control"
      id="email"
      placeholder="Enter email"
      name="email"
      ref={usernameRef}
    />
  </div>
  <div className="mb-3">
    <label htmlFor="pwd" className="form-label">
      Password:
    </label>
    <input
      type="password"
      className="form-control"
      id="pwd"
      placeholder="Enter password"
      name="pswd"
      ref={passwordRef}
    />
  </div>
  <div className="form-check mb-3">
    <label className="form-check-label">
      <input className="form-check-input" type="checkbox" name="remember" />{" "}
      Remember me
    </label>
  </div>
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>

    )
}
export default UncontrolledCompo











// useRef : 
// 1.to access the dom in functional based component we can use useRef hook in react 
// 2.we can persists the values between the renders 
// 3. it doesnt cause any re-render 

// useRef has a current property 