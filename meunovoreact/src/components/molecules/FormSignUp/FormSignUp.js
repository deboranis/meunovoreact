import React from "react";
import 'antd/dist/antd.css';
import {Link} from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import "./FormSignUp.css";

const FormSignUp = ({onFinish, login}) => {
    return(
        <Form
        name="normal_login"
        className="login-form"
        initialValues={{
            remember: true,
        }}
        onFinish={onFinish}
        >
        <Form.Item
            name="name"
            rules={[
            {
                required: true,
                message: 'Campo obrigatório. Por favor, insira o seu nome de usuário!',
            },
            ]}
        >
            <Input 
            prefix={<UserOutlined className="site-form-item-icon" />} 
            placeholder="Nome" />
        </Form.Item>

        <Form.Item
            name="password"
            rules={[
            {
                required: true,
                message: 'Campo obrigatório. Por favor, inisira sua a senha!',
            },
            ]}
            >

            <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Senha"
            />
            </Form.Item>

            <Form.Item>
                <Button 
                type="primary" 
                htmlType="submit" 
                className="login-form-button"
                onClick={login}
                >
                Cadastre-se
                </Button> Ou <Link to="/login">Login</Link>
            </Form.Item>

            </Form>
    );
    };

    export default FormSignUp;

