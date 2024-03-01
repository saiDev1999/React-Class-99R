import { Component } from "react";
import "./styles.css"

class CircleTask extends Component{
    constructor(){
        super()
        this.state={
            circles : [true]
        }
    }

    addCircles =()=>{

        this.setState({
           circles: [...this.state.circles,false]
        })

    }

    changeColor=(index)=>{
        // alert(index)
        console.log(index,this.state.circles)

    }
    render(){
        return(
            <>
            
            <h1>Circle task</h1>
            <button  onClick={this.addCircles} >Add circles {this.state.circles.length}</button>

            {
               

                this.state.circles.length>0
                ?

                 this.state.circles.map((flag,index)=> <div key={index} className="circle" style={{backgroundColor:flag?"black":"white"}} 
                 
                 onClick={()=>this.changeColor(index)}
                 >

                </div>
                    
                    
                    )
                    :
                    <h2>No circles</h2>
            }

           

         

            </>
        )
    }
}

export default CircleTask






// Tasks :
// 1. Repeat the class 
// 2. Add circles complete th pending 
// 3. corousel , add button , when clicking on add , add any dummy images 
// 4. delete option for circles added 
// 5. prepare for test  


