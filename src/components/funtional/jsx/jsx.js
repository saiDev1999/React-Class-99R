




// Jsx : Jsx stands for javascript and xml , 
// using this syntax we can mix both html and js part in one file 

import { Component } from "react";

// Broswer will doesnt understand jsx directly , for we have transpiler called babel 
// babel is a transpiler which converts jsx code to js code 


// inheritence : acquring properties and methods from parent 
//every class base components should have render method to render the html or jsx 



class Jsx extends Component{
    render(){
        return(
            <h2>hello jsx</h2>
        )
    }
}
export default Jsx



