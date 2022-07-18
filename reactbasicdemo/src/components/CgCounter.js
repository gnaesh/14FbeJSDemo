import React, { Component } from 'react'

export default function CgCounter (OriginalComp)
{
class NewComp extends Component
{ 
    constructor(props){
        super(props)
        this.state={count:0}
        }
        //---------
        incCount=()=>{
            this.setState({coun:this.state.count+1});
        }
        //------------
    }
  render() {
    return (<OriginalComp count={this.state.count}increaseCounter={this.incCount}/>
    )
  }
}
