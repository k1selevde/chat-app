import * as React from 'react'
import Block from "../../../components/Block";
import {Form, Input} from 'antd';
import {Link} from "react-router-dom";

import FormField from "../../../components/FormField";
import {Button} from "../../../components";
import validateFormField from "../../../utils/helpers/validateFormField";
import {LockOutlined} from "@ant-design/icons";

const success = false;


const RegisterForm: React.FC<any>  = (props: any ) => {
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


    // @ts-ignore
    return (
        <div>
            <Block>
                <div className="auth">
                    <div className="auth__top">
                        <h2 className="auth__title">Регистрация</h2>
                        <p className="auth__descr">Для входа в чат, вам нужно зарегистрироваться</p>

                        <div>{!success ? (
                                <Form
                                    className="auth__form"
                                    // @ts-ignore
                                    onSubmit={handleSubmit}
                                >
                                    <FormField
                                        name="email"
                                        placeholder="Email"
                                        handleChange={handleChange}
                                        handleBlur={handleBlur}
                                        errors={errors}
                                        values={values}
                                        touched={touched}
                                    />
                                    <FormField
                                        prefix={<LockOutlined/>}
                                        name="fullname"
                                        placeholder="Ваше имя и фамилия"
                                        handleChange={handleChange}
                                        handleBlur={handleBlur}
                                        errors={errors}
                                        values={values}
                                        touched={touched}
                                    />

                                    <FormField
                                        name="password"
                                        placeholder="Пароль"
                                        handleChange={handleChange}
                                        handleBlur={handleBlur}
                                        errors={errors}
                                        values={values}
                                        type="password"
                                        touched={touched}
                                    />

                                    <FormField
                                        name="password_2"
                                        placeholder="Повторите пароль"
                                        handleChange={handleChange}
                                        handleBlur={handleBlur}
                                        errors={errors}
                                        type="password"
                                        values={values}
                                        touched={touched}
                                    />

                                    <Form.Item
                                        style={{textAlign: 'center'}}
                                    >
                                        {isSubmitting && !isValid && <span>Ошибка!</span>}
                                        <Button
                                            disabled={!dirty || !isValid || isSubmitting}
                                            size="large"
                                            type="primary"
                                            onClick={handleSubmit}
                                        > Sign up
                                        </Button>
                                    </Form.Item>
                            </Form> ) : (
                            <div className="auth__success-block">
                                <h2>Подтвердите свой аккаунт</h2>
                                <p>
                                На Вашу почту отправлено письмо с ссылкой на подтверждение
                                аккаунта.
                                </p>
                            </div>
                            )}</div>


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