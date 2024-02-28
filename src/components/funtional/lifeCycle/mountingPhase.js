import axios from "axios";
import React, { Component } from "react";
import DNASpinner from "../spinners/dna-spinner";






class MountingPhase extends Component{
    constructor(){
        console.log("constructor")
        super()
        this.state={
            message:"Good morning",
            users:[]
        }
    }

    componentDidMount(){
        //it will execute only once in a life cycle 
        console.log("component did mount")
       axios.get("https://dummyjson.com/users")
       .then(response=>{
        this.setState({
            users:response.data.users
        })
       })    

       }

    render(){
        console.log("render")
        return(
            <>
            <h3>hello world</h3>
            {
         this.state.users.length>0
         ?

                this.state.users.map(eachObject=>{
                    return(
                        <React.Fragment key={eachObject.id} >
                        <h3>{eachObject.firstName}</h3>
                        </React.Fragment>
                    )
                })
                :
                <>

            <DNASpinner/>
            <h1>Please data fetching</h1>
            </>
            }

              
            </>
        )
    }
  
}
export default MountingPhase

// Tasks:
// 1. Repeat the class 
// 2. install and research about the some npm packages like react-spinners , circular-Bars, animated cards 
// // https://nukeop.github.io/react-ui-cards/?path=/story/cards-news-header-card--example-2
// // https://www.npmjs.com/package/react-ui-cards?activeTab=readme
// 3. data in the cards 