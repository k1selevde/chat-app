import * as React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Tooltip} from 'antd';


import { LockOutlined, MailOutlined, InfoCircleOutlined  } from '@ant-design/icons'


import { Block, Button } from "../"

import validateFormField from "../../utils/helpers/validateFormField";



interface ForgotPasswordProps {

}


const ForgotPassword: React.FC<ForgotPasswordProps>  = (props: any) => {
    const {
        // values,
        // touched,
        // errors,
        // handleChange,
        // handleBlur,
        // handleSubmit,
        // isValid,
        // isSubmitting,
        // dirty
    } = props;


    const handleChange = (e: any) => {

    }

    return (
        <div>
            <Block>
                <div className="auth">
                    <div className="auth__top">
                        <h3 className="auth__title">RESTORE PASSWORD</h3>

                        <Form className="auth__form">
                            <Form.Item
                                // validateStatus={validateFormField("email", touched,values,  errors)}
                                // help={!touched.email ? "" : errors.email}
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
                                />
                            </Form.Item>
                            <Form.Item
                                style={{textAlign: 'center'}}
                            >
                                <Button
                                    // disabled={!(values.passwordLogin && values.email) || !isValid || isSubmitting}
                                    size="large"
                                    type="primary"
                                    // onClick={handleSubmit}
                                > Reset
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

export default ForgotPassword;