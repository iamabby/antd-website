import React,{Component} from "react";
import {Link} from "react-router-dom";
import { Layout, Menu, Icon } from 'antd';
import Main from "../Main/Main";
import "./Nav.scss";

const {  Sider } = Layout;
const SubMenu = Menu.SubMenu;

class Nav extends Component{
    state = {
        collapsed: false,
      };
    
      onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
      }
    
      render() {
        return (
          <Layout style={{ minHeight: '100vh' }}>
            <Sider
              collapsible
              collapsed={this.state.collapsed}
              onCollapse={this.onCollapse}
            >
              <div className="logo" />
              <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1">
                <Link to="/Home">
                  <Icon type="pie-chart" />
                  <span>首页</span>
                  </Link>
                </Menu.Item>
              
                <SubMenu
                  key="sub1"
                  title={<span><Icon type="pic-center" /><span>商品</span></span>}
                >
                  <Menu.Item key="3">商品管理</Menu.Item>
                  <Menu.Item key="4">品类管理</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  title={<span><Icon type="ordered-list" /><span>订单</span></span>}
                >
                  <Menu.Item key="6">订单管理</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub3"
                  title={<span><Icon type="user" /><span>用户</span></span>}
                >
                  <Menu.Item key="7">
                  <Link to="/User">用户列表</Link>
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>

            <Layout>
              <div className="main-block">
              <Main />
              </div>
            </Layout>
          
          </Layout>
        );
      }
}

export default Nav;
