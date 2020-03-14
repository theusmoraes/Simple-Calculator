import  React,{ Component } from "react"
import "./ButtonPainel.css"
import Button from "./Button";


export default class ButtonPainel extends Component{
    handleClick = buttonName =>{
      this.props.clickHandle(buttonName)
    }
    render(){
        return(
            <div className="component-button-panel">
            <div>
              <Button name="AC" wide clickHandle={this.handleClick}/> 
              <Button name="%" clickHandle={this.handleClick}/>
              <Button name="÷"  orange clickHandle={this.handleClick}/>
            </div>
            <div>
              <Button name="7" clickHandle={this.handleClick}/>
              <Button name="8" clickHandle={this.handleClick}/>
              <Button name="9" clickHandle={this.handleClick}/>
              <Button name="x"  orange clickHandle={this.handleClick}/>
            </div>
            <div>
              <Button name="4" clickHandle={this.handleClick}/>
              <Button name="5" clickHandle={this.handleClick}/>
              <Button name="6" clickHandle={this.handleClick}/>
              <Button name="-"  orange clickHandle={this.handleClick}/>
            </div>
            <div>
              <Button name="1" clickHandle={this.handleClick}/>
              <Button name="2" clickHandle={this.handleClick}/>
              <Button name="3" clickHandle={this.handleClick}/>
              <Button name="+" orange clickHandle={this.handleClick}/>
            </div>
            <div>
              <Button name="0"  wide clickHandle={this.handleClick}/>
              <Button name="." clickHandle={this.handleClick}/>
              <Button name="=" orange clickHandle={this.handleClick}/>
            </div>
          </div>

        );
    }
}