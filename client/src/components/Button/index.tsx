import * as React from 'react';

import { Button as BaseButton } from "antd"

import './Button.scss';


type ButtonProps = {

}

const Button: React.FC<any>  = (props) => {
    return (
        <BaseButton />
    );
}

export default Button;

