import  React,{ Component } from "react"
import "./Display.css"


export default class App extends Component{
    
    render(){
        return(
            <div className= "component-display">
                <div>{this.props.value}</div>
            </div>
        );
    }
}