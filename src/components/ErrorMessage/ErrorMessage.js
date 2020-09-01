import React from 'react';
import { string } from 'prop-types';
import errors from '../../helpers/errors';

const ErrorMessage = ({ errorMessage }) => {
    return (
        <p className="has-text-danger">
            {errors[errorMessage] || errors.other}
        </p>
    );
};

ErrorMessage.propTypes = {
    errorMessage: string.isRequired,
};

export default ErrorMessage;
