import { Component } from "react";







class UpdatingPhase extends Component{
   
state={
    count:0,
    color:"red"
}

increment=()=>{
    this.setState({
        count:this.state.count+1
    })
}

componentDidMount(){
    console.log("did mount")
    document.title=`Current count ${this.state.count}`
}

shouldComponentUpdate(){
    console.log("should component update")
    //we use in optimization purpose , in pure components
    return true
}

getSnapshotBeforeUpdate(prevProps,prevState){
    console.log(prevState,"previous state")
    return null

}



componentDidUpdate(){
    console.log("did update")

    //api calls 
    document.title=`Current count ${this.state.count}`
}

static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps")
    return {color: props.favColor };
  }




    render(){
        console.log("render")
        return(
            <>
            
            <h1>Counter example{this.state.count}</h1>
            <button onClick={this.increment} >increment</button>
            </>
        )
    }
}
export default UpdatingPhase