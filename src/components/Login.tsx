import React from "react";
import { Form, Input, Button, Card } from "antd";
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const nav = useNavigate();
  const onFinish = (values: any) => {
    console.log("Success:", values);
    nav("/userlist");
  };

  

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="site-card-border-less-wrapper" style={{ height: "100%"}}>
      <Card
        bordered={true}
        style={{
          position: "absolute",
          left: " 50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          padding: "30px",
        }}
      >
        <h2 style={{display:"flex", justifyContent:"center"}}>LOGIN FORM</h2>
        <Form
          name="basic"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 25 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder='UserName'/>
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder='Password'/>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
            <Button  htmlType="submit" style={{backgroundColor:"#3ec667", borderRadius:"5PX"}} block>
              Sign In
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
