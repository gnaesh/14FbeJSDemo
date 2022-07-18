import React from "react";

class Header extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <marquee>
                    <h2>Welcome TO {this.props.compName}.............</h2>
                </marquee>
                <a>Home</a><a>Carrer</a>
                <hr color="Green" size="3"></hr>
                
            </div>
        )
    }
}
export default Header;