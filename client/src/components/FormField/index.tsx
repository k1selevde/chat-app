import React from "react";
import { Form, Input } from "antd";


//import validateField from "../../utils/helpers/validateFormField;

interface FormFieldProps {
    name?: string;
    placeholder?: string;
    icon?: string;
    type?: string;
    handleChange?: any;
    handleBlur?: any;
    touched?: object;
    errors?: object;
    values?: object;
}


const FormField: React.FC<FormFieldProps> = ({
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
            // validateStatus={validateField(name, touched, errors)}
            // help={!touched[name] ? "" : errors[name]}
            // hasFeedback
        >
            <Input
                //id={name}
                // prefix={<Icon type={icon} style={{ color: "rgba(0,0,0,.25)" }} />}
                size="large"
               // placeholder={placeholder}
                // value={values[name]}
                //onChange={handleChange}
                //onBlur={handleBlur}
                //type={type}
            />
        </Form.Item>
    );
};

export default FormField;