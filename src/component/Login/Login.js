import React,{Component} from "react";
import "./Login.scss";
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import axios from "axios";
const FormItem = Form.Item;


class NormalLoginForm extends React.Component {
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        let params = {
          account: this.userName,
          password: this.password
      }
        if (!err) {
          console.log('您输入的用户名和密码是: ', values);
          axios.post("/manage/user/login.do",params)
          .then(res=>{
            if (res.data.result_code === "10000") {
              // 存储登录数据
              let userName= localStorage.setItem('userName', JSON.stringify(res));
              console.log(userName);
               window.location.href = "/";
            }
          })
          .then(error=>{
            console.log(error);
          }) 
        }
      });
    }
  
    render() {
      const { getFieldDecorator } = this.props.form;
      return (
        <div className="login">
        <h2>登录后台系统</h2>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: '请输入用户名' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '密码不能为空!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
            )}
          </FormItem>
          <FormItem>
           
           
            <Button type="primary" htmlType="submit" className="login-form-button" block>
              登录
            </Button>
           
          </FormItem>
        </Form>
        </div>
      );
    }
  }
  


const Login = Form.create()(NormalLoginForm);

export default Login;