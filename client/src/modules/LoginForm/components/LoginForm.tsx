import * as React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input} from 'antd';


import { CaretDownFilled, LockOutlined, MailOutlined  } from '@ant-design/icons'


import { Block, Button } from "../../../components"



const LoginForm  = () => {
    return (
        <div>
            <Block>
                <div className="auth__top">
                    <h3>SIGN IN</h3>
                </div>

                <Form className="login-form">
                    <Form.Item>
                        <Input
                            prefix={<MailOutlined />}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Input
                            prefix={<LockOutlined />}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button>Sign in</Button>
                    </Form.Item>
                </Form>


                <div className="auth__bottom">
                    <p>Don’t yet have an account?</p>
                    <Link
                        className="auth__register-link"
                        to="/signup"
                    >
                        Register for free :D
                    </Link>
                </div>
            </Block>
        </div>
    );
}

export default LoginForm;