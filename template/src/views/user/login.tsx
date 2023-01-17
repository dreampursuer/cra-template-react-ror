import React from 'react';
import {Button, Form, Input, message} from "antd";
import {userService} from "../../services/UserService";
import {useNavigate} from "react-router-dom";
import {setLoginUser} from "../../conf/ApplicationConfig";


export function Login() {
    const navigate = useNavigate()
    const onFinish = (params: any) => {
        const user = userService.login(params.username, params.password)
        if (user){
            setLoginUser(user)
            navigate('/main/index')
        }
        else{
            message.error("Login failed!")
        }
    };

    return (
        <div style={{display: "flex", justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column', marginTop: -100}}>
            <h2>React-ror demo</h2>
            <Form
                name="basic"
                labelCol={{span: 8}}
                wrapperCol={{span: 16}}
                onFinish={onFinish}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{required: true, message: 'Please input your username!'}]}
                >
                    <Input placeholder={"Username: admin"}/>
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{required: true, message: 'Please input your password!'}]}
                >
                    <Input.Password placeholder={"Password: reactror"} />
                </Form.Item>

                <Form.Item wrapperCol={{offset: 8, span: 16}}>
                    <Button type="primary" htmlType="submit">
                        Login
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};
