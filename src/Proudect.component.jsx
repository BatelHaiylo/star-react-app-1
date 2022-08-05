import ProudectPic from "./ProudectPic";
import { Component } from "react";
import Headline from "./Headline.component";

export default class Proudect extends Component{
    render(){
        return(
            <p>Proudect 
                <Headline prouductName = "HEADPHONES"/>
                <ProudectPic src = 'images/camel.jpeg'/>
            </p>
        )
    }
}