import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import {Button as BaseButton} from 'antd';

import './Button.scss'

const Button  = (props) => {
    return <BaseButton
                className={cn('button', {'button--large': props.size === 'large'})}
                {...props}
            />
}

Button.propTypes = {
    className: PropTypes.string
};


export default Button;