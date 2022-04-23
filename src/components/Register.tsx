import React from "react";
import { Form, Input, Button, Card } from "antd";
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const nav = useNavigate();
  const onFinish = (values: any) => {
    console.log("Success:", values);
    nav("/login");
  };

  

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="site-card-border-less-wrapper" >
      <Card
        bordered={true}
        style={{
          position: "absolute",
          left: " 50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          padding: "20px",
          width:"400px",
          borderRadius:"20px"
        }}
      >
        <h2 style={{display:"flex", justifyContent:"center"}}>Sign Up</h2>
        <Form
          name="basic"
          labelCol={{ span: 15 }}
          wrapperCol={{ span: 25 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
          label="First Name"
            name="firstname"
            rules={[{ required: true, message: "Please input your first name!" }]}
          >
            <Input placeholder='First Name'/>
          </Form.Item>

          <Form.Item
          label="Last Name"
            name="lastname"
            rules={[{ required: true, message: "Please input your lastname!" }]}
          >
            <Input placeholder='Last Name'/>
          </Form.Item>

          <Form.Item
          label="Email address"
            name="emailaddress"
            rules={[{ required: true, message: "Please input your email address!" }]}
          >
            <Input placeholder='Email address'/>
          </Form.Item>

          <Form.Item
          label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder='Password'/>
          </Form.Item>


          <Form.Item wrapperCol={{ offset:4, span: 16 }}>
            <Button type="primary" block htmlType="submit">
              Sign Up
            </Button>
          </Form.Item>

          <Form.Item wrapperCol={{ offset:11, span: 16 }}>
            <p>Already registered <a>Sign In</a></p>
          </Form.Item>
        </Form> 
      </Card>
    </div>
  );
}
