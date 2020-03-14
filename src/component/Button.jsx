import "./Button.css";

import  React,{ Component } from "react";

export default class Button extends Component{
    handleClick = () =>{
        this.props.clickHandle(this.props.name)
    }
    render(){
        const className = [
            "component-button",
            this.props.orange ? "orange" : "",
            this.props.wide ? "wide" : "",
          ];
        return(
            <div  >

                <button className={className.join(" ").trim()} onClick={this.handleClick} >{this.props.name}</button>
            </div>

        );
    }
}