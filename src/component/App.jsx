import  React,{ Component } from "react"
import "./app.css"
import ButtonPainel from "./ButtonPainel";
import Display from "./Display";
import calculate from "../logic/calculate";

export default class App extends Component{
    state ={
        total: null,
        next: null,
        operacao: null,
    }
    handleClick = buttonName =>{
        this.setState(calculate(this.state,buttonName))
        console.log("total:",this.state.total)
        console.log("next:",this.state.next)
        console.log("operacao:",this.state.operacao)



    }
    render(){
        return(
            <div className= "component-App">
                <Display value={this.state.next || this.state.total || "0"}></Display>
                <ButtonPainel clickHandle={this.handleClick}></ButtonPainel>
            </div>
        );
    }
}