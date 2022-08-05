import { Component } from "react";


export default class Headline extends Component{
    constructor(props){
        super()
    }
    render(){
        return(
            <h1>product name is:{this.props.prouductName}</h1> 
        )
    }
}