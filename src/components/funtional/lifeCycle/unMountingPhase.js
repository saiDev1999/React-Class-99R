import { Component } from "react";
import App from "../../../App"


// whenever we removing elements from dom , there is chance of memory leaks in the App
// which slow downs the app 

// to cleanup the memory leaks , while unmounting we use component will unmount


class Parent extends Component{
   

    constructor(){
        super()
        this.state={
            isChildVisible:true
        }
    }
    toggleChild=()=>{
        this.setState(
            {
                isChildVisible:!this.state.isChildVisible
            }
        )
    }
    render(){
        return(
            <>
            <h3> I am parent</h3>
            <button onClick={this.toggleChild} >Toggle the child</button>

            {
                this.state.isChildVisible
                ?
                <Child/>
           
                :
                <h1>Child hidden</h1>
            }
            </>
        )
    }
}
export default Parent



class Child extends Component{

componentWillUnmount(){
    alert("child removed from dom")
    console.log("we can clear the memory leaks")
}

    render(){
        return(
            <h1>Child visible</h1>

        )
    }
}


