import React, { Component } from "react";
import axios from "axios";


class UsersData extends Component{

    constructor(){
        super()
        this.state={
            userCollection:[]
        }
    }
   
    fetchData=()=>{
//         fetch('https://dummyjson.com/users')
// .then(res => res.json())
// .then(response=>{
//     this.setState({
//         userCollection:response.users
//     })
// });
axios.get("https://dummyjson.com/users")
.then(response=>{
    console.log(response)
    if(response.status===200){
          this.setState({
        userCollection:response.data.users
    })

    }else{
        alert("something went wrong")
    }
  
});

    }

    render(){
        return(
            <>
            <h1>User collection</h1>
            <button onClick={this.fetchData} >Click to fetch user data</button>
            {
              this.state.userCollection.length>0 &&  this.state.userCollection.map(eachObject=>{
                    return(
                        <React.Fragment key={eachObject.id} >
                        <h3>FullName : {`${eachObject.firstName} ${eachObject.lastName}`}</h3>
                        <h3>Age : {eachObject.age}</h3>
                        <h2>---------------------------------------</h2>
                        </React.Fragment>
                    )
                })
            }
            </>
        )
    }
}
export default UsersData



// Tasks :
// 1. Repeat the class 
// 2. difference between fetch and axios 
// 3. adding circles 
// 4. sort the data as per price (take products api from fakestore)

