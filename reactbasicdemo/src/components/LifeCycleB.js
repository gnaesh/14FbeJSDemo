import React, { Component } from 'react'

export default class LifeCycleB extends Component {
    //-------------- 1--------------
constructor(props){
    super(props);
    this.state={location:"Pune" , country:"US"};
    console.log("construtor executed");
}
//----------- 2 -----------------
static getDerivedStateFromProps(prps,sts){
    console.log("Lifecycle getDerivedStateFromProps Executeed "+prps.country+"--"+sts.location);
    return null;
}

//----------- 3 -------------
shouldComponenUpdate(){
    console.log("Lifecycle shouldComponenUpdate Executed ")
return true;
}
//-------------- 4 ---------------------
  render() {
    return (
      <div>LifeCycle B Location {this.state.location}
      <button onClick={()=>{this.setState({location:"MUmbai"})}}>
      Change Location</button></div>
    )
  }

  //---------------5 ---------------
  componentDidMount(){
      console.log("lifecycle B componentDidMount Executed");
  }

  //--------- 6 ----------------
  getSnapshotForUpdate(prevProps,preState)
{
console.log(`lifecycle B getSnapshotForUpdate Executed : prevCount= ${prevProps.country} -  preslocation=${preState.location}`);
return null;
}

//----------------- 7 ---------------
componentDidUpdate(){
    console.log("lifecycle B componentDidUpdate Executed");
}

}
