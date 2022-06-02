import React from 'react';

import classNames from 'classnames';

import style from './input.module.scss';

const Input = ({
    name='',
    type = 'text',
    disabled = false,
    value,
    span,
    handleChange,
    size = 'medium',
    placeholder = '',
    theme = 'primary'
}) => {

    const classInput = classNames(style.input, style[theme]);

    return(
        <input  className={classInput} 
                placeholder={placeholder}
                type={type}
                name={name}
                disabled={disabled}
                onChange={handleChange}
                value={value}/>
    );
}

export default Input;
