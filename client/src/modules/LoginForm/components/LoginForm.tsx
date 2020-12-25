import * as React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Tooltip} from 'antd';


import { LockOutlined, MailOutlined, InfoCircleOutlined  } from '@ant-design/icons'


import { Block, Button } from "../../../components"

import validateFormField from "../../../utils/helpers/validateFormField";


const LoginForm: React.FC<any>  = (props: any) => {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        isValid,
        isSubmitting,
        dirty
    } = props;


    return (
        <div>
            <Block>
                <div className="auth">
                    <div className="auth__top">
                        <h3 className="auth__title">SIGN IN</h3>

                        <Form className="auth__form">
                            <Form.Item
                                validateStatus={validateFormField("email", touched,values,  errors)}
                                help={!touched.email ? "" : errors.email}
                                hasFeedback
                                style={{minHeight: '70px'}}
                            >
                                <Input
                                    id="email"
                                    size="large"
                                    style={{width: '320px'}}
                                    placeholder="E-Mail"
                                    type="email"
                                    prefix={<MailOutlined/>}
                                    suffix={
                                        <Tooltip title="super useful information">
                                            <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                                        </Tooltip>
                                    }
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </Form.Item>
                            <Form.Item
                                validateStatus={validateFormField("passwordLogin", touched,values, errors)}
                                help={!touched.passwordLogin ? "" : errors.passwordLogin}
                                style={{minHeight: '70px'}}
                            >
                                <Input.Password
                                    id="passwordLogin"
                                    size="large"
                                    placeholder="Пароль"
                                    type="password"
                                    prefix={<LockOutlined/>}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </Form.Item>
                            <Form.Item
                                style={{textAlign: 'center'}}
                            >
                                <Button
                                    disabled={!(values.passwordLogin && values.email) || !isValid || isSubmitting}
                                    size="large"
                                    type="primary"
                                    onClick={handleSubmit}
                                > Sign in
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>

                    <div className="auth__bottom">
                        <p>Don’t yet have an account?</p>
                        <Link
                            className="auth__register-link"
                            to="/signup"
                        >
                            Register for free
                        </Link>
                    </div>
                </div>
            </Block>
        </div>
    );
}

export default LoginForm;