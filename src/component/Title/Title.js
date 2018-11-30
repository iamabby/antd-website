import React,{Component} from "react";

import "./Title.scss";

class Title extends Component{

 componentDidMount(){
     document.title=this.props.title;
 }
 render(){
   return(
       <div className="col-12 title">
           {this.props.title}
       </div>
    )
 }
}
export default Title;