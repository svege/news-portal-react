import React from 'react';
import { string, bool, func } from 'prop-types';

const Input = ({
    name,
    type,
    change,
    isRequired,
    value,
    text,
    placeholder,
}) => {
    return (
        <div className="field">
            <label htmlFor={name} className="label">
                {text}
                <span className="is-size-7 is-block">
                    (тестовые данные: {placeholder})
                </span>
            </label>
            <div className="control">
                <input
                    type={type}
                    id={name}
                    value={value}
                    name={name}
                    onChange={change}
                    required={isRequired}
                    placeholder={`${text}…`}
                    className="input is-primary"
                />
            </div>
        </div>
    );
};

Input.propTypes = {
    name: string.isRequired,
    value: string.isRequired,
    type: string.isRequired,
    isRequired: bool.isRequired,
    change: func.isRequired,
    text: string.isRequired,
    placeholder: string.isRequired,
};

export default Input;
