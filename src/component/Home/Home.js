import React,{Component} from "react";
import "./Home.scss";
import Title from "../Title/Title";



import axios from "axios";

import {Row ,Col,Icon} from "antd";
class Home extends Component{
 constructor(){
   super();
   this.state={
     userCount:0,
     productCount:0,
     orderCount:0
   }
 }
 componentWillMount(){
  
  axios.get("/manage/statistic/base_count.do")
   .then(res=>{
    let data=res.data.data;
    this.setState({
      userCount:data.userCount,
      productCount:data.productCount,
      orderCount:data.orderCount
    })
 
   })
   .then(error=>{
     console.log(error);
   })
 }
 render(){
   return(
       <div>
           <Title title="首页" />
           <div className="gutter-example">
            <Row gutter={30}>
              <Col className="gutter-row" span={8}>
                <div className="gutter-box">
                <div className="item item-user">
                        <div className="num">{this.state.userCount}</div>
                        <div>
                            <Icon type="user" />用户总数
                        </div>
                      </div>
                </div>
              </Col>
              <Col className="gutter-row" span={8}>
                <div className="gutter-box">
                <div className="item item-product">
                        <div className="num">{this.state.productCount}</div>
                        <div>
                            <Icon type="pic-center" />商品总数
                        </div>
                      </div>
                </div>
              </Col>
              <Col className="gutter-row" span={8}>
                <div className="gutter-box">
                <div className="item item-order">
                        <div className="num">{this.state.orderCount}</div>
                        <div>
                            <Icon type="ordered-list" />订单总数
                        </div>
                      </div>
                </div>
              </Col>
            </Row>
          </div>
       </div>
    )
 }
}
export default Home;