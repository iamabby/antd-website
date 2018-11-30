import React,{Component} from "react";
import './Head.scss';

import { Link} from "react-router-dom";
import { Layout, Row ,Col,Icon} from "antd";
const { Header } = Layout;
class Head extends Component{
    constructor(){
        super();
        this.state={
            xx:""
        }
    }
    componentDidMount(){
        console.log("000000000")
        let xx= JSON.parse(localStorage.getItem("userName"));
        this.setState({
            xx:xx.account
        })
    console.log(xx);
    }
    render(){
        return(
            <div>
                <Layout className="layout">
                    <Header>
                        <Row>
                            <Col span={12} className="logo"><span className="happy">Happy</span>MMall</Col>
                            <Col span={12} className="user">
                             <Link to="/Login">
                                <Icon type="user" />欢迎你，{this.state.xx}
                             </Link>
                            </Col>
                        </Row>
                        
                    </Header>
                </Layout>
                
            </div>
        )
    }
}

export default Head;

