import React,{Component} from "react";

import Title from "../Title/Title";

import { Table } from 'antd';
import axios from "axios";


class User extends Component{
 
 constructor(){
    super();
 }
 componentDidMount(){
    axios.get("/manage/user/list.do")
    .then(res=>{
     console.log(res.data)
    })
    .then(error=>{
       console.log(error);
    })
 }
 render(){
   return(
       <div className="user">
       
        <Title  title="用户列表"/> 





       </div>
    )
 }
}
export default User;