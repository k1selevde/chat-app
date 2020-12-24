import * as React from 'react'
import Block from "../../../components/Block";
import {Form} from 'antd';
import {Link} from "react-router-dom";

import FormField from "../../../components/FormField";
import {Button} from "../../../components";

const success = true;


const RegisterForm  = () => {
    return (
        <div>
            <Block>
                <div className="auth">
                    <div className="auth__top">
                        <h2 className="auth__title">Регистрация</h2>
                        <p className="auth__descr">Для входа в чат, вам нужно зарегистрироваться</p>

                        {!success ? (<Form className="auth__form">
                            <FormField  name="fullname"/>
                            <FormField />
                            <FormField />
                            <FormField />
                            <Form.Item
                                style={{textAlign: 'center'}}
                            >
                                <Button
                                    size="large"
                                    type="primary"
                                > Sign up
                                </Button>
                            </Form.Item>
                        </Form>) : (
                            <div className="auth__success-block">
                                <div>
                                   {/* <Icon type="info-circle" theme="twoTone" />*/}
                                </div>
                                <h2>Подтвердите свой аккаунт</h2>
                                <p>
                                    На Вашу почту отправлено письмо с ссылкой на подтверждение
                                    аккаунта.
                                </p>
                            </div>
                        )}


                    </div>

                    <div className="auth__bottom">
                        <p>Do you have an account?</p>
                        <Link
                            className="auth__register-link"
                            to="/signin"
                        >
                           Log in now
                        </Link>
                    </div>
                </div>
            </Block>
        </div>
    );
}

export default RegisterForm;