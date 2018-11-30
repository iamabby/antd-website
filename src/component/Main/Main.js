import React,{Component} from "react";


import Home from "../Home/Home";
import User from "../User/User";
import { Route,Switch } from 'react-router-dom';

class Main extends Component{

    render(){
        return(
            <Switch>
            <Route path="/Home" component={Home} />
            <Route path="/User" component={User} />
        </Switch>
            
        )
    }
}

export default Main;
