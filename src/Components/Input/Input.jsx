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

    return(
        <input  className={style.input} 
                placeholder={placeholder}
                type={type}
                name={name}
                disabled={disabled}
                onChange={handleChange}
                value={value}/>
    );
}

export default Input;
