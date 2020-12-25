import React from "react";
import { Form, Input} from "antd";
import validateFormField from "../../utils/helpers/validateFormField";
import {LockOutlined} from "@ant-design/icons";


interface FormFieldProps {
    name: string;
    placeholder?: string;
    icon?: string;
    type?: string;
    handleChange?: any;
    handleBlur?: any;
    touched: object;
    errors: object;
    values: object;
    prefix?: any;
}



const FormField: React.FC<FormFieldProps> = ({
                       prefix,
                       name,
                       placeholder,
                       icon,
                       type,
                       handleChange,
                       handleBlur,
                       touched,
                       errors,
                       values
                   }) => {




    return (
        <Form.Item
            //@ts-ignore
            validateStatus={validateFormField(name, touched, errors)}
            //@ts-ignore
            help={!touched[name] ? "" : errors[name]}
            hasFeedback
            style={{minHeight: '70px'}}
        >
            {(type == "password") ?
                <Input.Password
                    prefix={<LockOutlined/>}
                    id={name}
                    size="large"
                    placeholder={placeholder}
                    // @ts-ignore
                    value={values[name]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type={type}
                />

                :
                <Input
                    id={name}
                    size="large"
                    placeholder={placeholder}
                    // @ts-ignore
                    value={values[name]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type={type}
                />
            }
        </Form.Item>
    );
};

export default FormField;